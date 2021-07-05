
<p align="center">
 <img style="
    width: 99px;
" src="https://s1.imagehub.cc/images/2021/06/19/logo29220baeceff248d5.png">
</p>

# Moderate "终"定在哪？

Moderate，意思为适中的，适度的，用这个作为代号，主要取决于他的本名“中用”，其一以贯之的想法就是中庸，秉承着以人为本的态度，着眼一般且常见业务，整理出一套“还行”的解决方案，选择性地追求先锋，策略性地坚持守拙，大体保持趋向极致的中庸，目标是打造一个没那么“重”(各种设限)，没那么“轻”(啥也没有)，方便演化的一个有生命力的脚手架，这就是Moderate所追求的“终”。

>基于此想法指导下，初步具备了以下主要功能：

🥟 __开箱即用__，逻辑风格（比较）统一，理解一二，可推其他，并提供模版作为参考。

🍢 __路由可配置__，可约定（部分），可视化调整，并且具备切换动画和还原滚动位置等功能。

🥥 __页面开发确立了一个灵活的规范__，即将页面的数据和逻辑关注分离，实则一体，方便扩展和维护。

🥪 __组件基于antd进行了包装__，目的旨在（尽可能）遵循其设计的基础上扩展一些功能，（追求）让用起来更方便。

🍱 __对数据管理器层进行了整合__，确立好业务边界，让业务流转协调顺畅，可配置行为，如:mock，schema校验，接口防抖，提示信息等。

🍬 __网络请求基于axios进行了包装__，进行了简单且必要的封装。

🇬🇧 __对国际化功能进行了包装__，为每个页面指定了独立的国际化文件，并简化了开发复杂度，更直接，便于扩展和维护。

🥦 __前端mock接口更直接自然__，开发环境下动态引入且可拆卸可定制。

📐 __提供接口参数的schema校验__，以应对后台的api文档细节口口相传的潜在危机。

📒 __集成了MD文档功能__，这样可以方便在开发时有什么相关想法和收获，在不脱离项目的情况下进行记录沉淀，既方便个人，又贡献集体。

🥡 __集成了electron__，通过命令可以打包成Pc/Mac的应用。

🏀 __初步整合了Cocos引擎__，可以在react代码中写游戏，想想就感觉兴奋，一加一就不是等于二的问题了。


# 快速上手

## 环境准备

首先得有 node
推荐使用 `yarn` 管理 `npm` 依赖，并使用国内源（阿里用户使用内网源）。

## 安装 qanglee-cli

```shell
  npm i -g qanglee-cli
```

## 创建项目

先找个地方，然后执行`qanglee create`或者`npx qanglee create`。

```shell
  qanglee create
? your projectName: Moderate

```

## 安装前必要准备
### 设置淘宝镜像
```shell
npm config set registry=https://registry.npm.taobao.org/
```

### 解决electron安装卡住的问题

```shell
npm config set ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
```

## 安装依赖

```shell
yarn
```
 

## 运行

```shell
npm start
或
yarn start
```

## 效果图
![](https://s1.imagehub.cc/images/2021/06/29/ezgif.com-gif-maker-10444ce63768eb8f0e.gif)
# 用不用

因人而异，Moderate就是在“平平无奇”的地方，做着”普普通通“的事情，不奢望会被接受，不忧虑会被否定，一直在路上，仅希望有一分就贡献一分光和热。


# 作赋一首，以抒胸意

  前潜皆可，可攻可守。
  黑白皆容，趋善避恶。
  乾坤知易，随遇而刻。
  保中守和，无成有终。

