import React from "react";
import "./index.scss";
import CommonPropItem from "../formItem";
import { Button, Modal, Form } from "antd";

class CollectionCreateForm extends React.Component<any> {
  render() {
    const {
      visible,
      onCancel,
      onCreate,
      form,
      formConfigArr = [],
      title = "修改POSITEM",
      dataSorce,
    } = this.props;
    const { resetFields } = form;
    return (
      <Modal
        visible={visible}
        title={title}
        okText="保存"
        onCancel={() => {
          resetFields();
          onCancel();
        }}
        onOk={onCreate}
      >
        <Form layout="vertical">
          {formConfigArr.map((item: any, index: number) => {
            let formConfigTemp = { ...item };
            if (dataSorce && item.propName in dataSorce) {
              formConfigTemp = {
                ...item,
                initialValue: dataSorce[item.propName],
              };
            }
            return (
              <CommonPropItem
                formConfig={formConfigTemp}
                form={form}
                key={index}
              />
            );
          })}
        </Form>
      </Modal>
    );
  }
}

class commonCollectionModal extends React.Component<any> {
  state = {
    visible: false,
  };
  formRef: any;
  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { handleCreate = () => {} } = this.props;
    const { form } = this.formRef.props;
    form.validateFields((err: any, values: any) => {
      if (err) {
        return;
      }
      form.resetFields();
      this.setState({ visible: false });
      handleCreate(values);
    });
  };

  saveFormRef = (formRef: any) => {
    this.formRef = formRef;
  };

  render() {
    const { children, propConfigArr, dataSorce, title } = this.props;
    return (
      <div>
        {<div onClick={this.showModal}>{children}</div> || (
          <Button type="primary" onClick={this.showModal}>
            New Collection
          </Button>
        )}
        <CollectionCreateForm
          title={title}
          dataSorce={dataSorce}
          formConfigArr={propConfigArr}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default commonCollectionModal;