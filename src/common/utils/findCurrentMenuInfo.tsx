import { matchPath } from "react-router-dom";

type menuItem = {
  name: string;
  path: string;
  children: any[];
  redirect: string;
  key: string;
};
type dataT = {
  menuItem: menuItem | null;
  nestKeys: string[];
};
/**
 *
 *
 * @param {*} [menu=[]] menu与route的配置数据
 * @param {*} pathname
 * @returns {Object} [menuItem,nestKeys]
 */
export const findCurrentMenuInfo = (menu = [], pathname: string) => {
  let data: dataT = {
    menuItem: null,
    nestKeys: [],
  };

  const findItem = (
    menuItem: menuItem,
    nestKeys: string[]
  ): menuItem | void => {
    // 找到你
    const { name, path, children, redirect, key } = menuItem;
    // 核查你是不是我要找的
    let match = matchPath(pathname, {
      path: path,
      exact: true,
      strict: true,
    });
    // 找到了，返回，没找到继续找
    if (match) {
      if (path.indexOf("/:") != -1) {
        nestKeys.push(key);
      }
      return menuItem;
    } else {
      // 发现它有一个子列表，继续针对子列表进行排查
      if (children && Array.isArray(children)) {
        nestKeys.push(key);
        return children.find((item) => {
          return findItem(item, nestKeys);
        });
      }
    }
  };

  menu.find((item) => {
    let nestKeys: any[] = [];
    let menuItem = findItem(item, nestKeys);
    if (menuItem) {
      data = {
        menuItem,
        nestKeys,
      };
      return true;
    }
    return false;
  });

  return data;
};

type getParentLoopPropT = {
  childKey: string;
  docTreeMap: any[];
  parentKeys: string[];
};
export const getParentLoop = (data: getParentLoopPropT) => {
  const { childKey, docTreeMap, parentKeys } = data;
  const { parentKey } = docTreeMap[childKey as keyof typeof docTreeMap];
  if (parentKey) {
    parentKeys.push(parentKey);
    getParentLoop({ childKey: parentKey, docTreeMap, parentKeys });
  }
  return parentKeys;
};
