# OpenHarmonySheet

基于 `Canvas` 实现的高性能 `Excel` 表格引擎组件 [OpenHarmonySheet](https://gi`thub.com/Wscats/sheet)。

由于大部分前端项目渲染层是使用框架根据排版模型树结构逐层渲染的，整棵渲染树也是与排版模型树一一对应。因此，整个渲染的节点也非常多。项目较大时，性能会受到较大的影响。

为了提升渲染性能，提供更优质的编辑体验从 `DOM` 更换成 `Canvas` 渲染，方便开发者构建重前端大型在线文档项目，在国内外实现类似引擎的公司仅仅只有几家，如：腾讯文档，金山文档，飞书和谷歌文档等。

<img src="./screenshots/1.gif" />

在项目中引入 `<Sheet></Sheet>` 组件即可，使用方法如下：

```html
<element name="Sheet" src="./sheet//pages//index/index.hml"></element>
<div class="container">
  <Sheet></Sheet>
</div>
```

# API 接口

渲染引擎封装好了常用的表格数据操作接口

## 初始化表格渲染层

```ts
import Table from "./sheet/";
this.el = this.$refs.canvas;
this.table = Table.create(this.el, 850, 800).render();
```

## 初始化选区层

```ts
this.viewport = new Viewport(this.table);
```

## 初始化表格数据

```ts
this.table.cell((ri, ci) => `${ri}-${ci}`);
```

## 合并单元格

```ts
this.table.merges(["G9:H11", "B9:D11"]);
```

## 设置列表行头

```ts
this.table.colHeader({ height: 50, rows: 2 });
```

## 冻结区域

```ts
this.table..freeze('C6');
```

## 滑动区域

```ts
this.table.scrollRows(2).scrollCols(1);
```

## 设置选区

```ts
this.table.selection(0, 0);
```

## 表格事件

```ts
this.table.$onClick(cell, evt);
```

## 单元格接口

```js
cell: {
    text: '',
    style: { border, fontSize, fontName, bold, italic, color, bgcolor, align, valign, underline, strike, textwrap, padding },
    type: text | button | link | checkbox | radio | list | progress | image | imageButton | date
}
```

## 其他接口

还提供完整的表格操作接口，例如：可修改单元格数据，样式，行列高度:

- scrollRows
- scrollCols
- cell
- row
- cellStyle
- freeze
- merges
- colHeader
- render
- selection
- onClick
- onSelected
- focus
- selectionStyle
- headerCellStyle
- freezeLineStyle
- headerLineStyle
- target
- scrollCols
- scrollRows
- startCol
- startRow

# 效果演示

运行 [OpenHarmonySheet](https://github.com/Wscats/sheet)，`长按`任一单元格即弹出`对话框`查看常用接口的使用方式:

<img width="220" align="left" src="./screenshots/2.png" />
<img width="220" align="left" src="./screenshots/3.png" />
<img width="220" align="left" src="./screenshots/4.png" />
<img width="220" src="./screenshots/5.png" />

# 实现方案

在谈谈实现方案之前，**我们先讲讲表格渲染有多复杂**，表格的渲染一般来说有两种实现方案：

- `DOM` 渲染。
- `Canvas` 渲染。

业界比较出名的 `handsontable` 开源库就是基于 `DOM` 实现渲染，同等渲染结果，需要对 `DOM` 节点进行精心的设计与构造，但显而易见十万、百万单元格的 `DOM` 渲染会产生较大的性能问题。因此，如今很多在线表格实现都是基于 `Canvas` 和叠加 `DOM` 来实现的，但使用 `Canvas` 实现需要考虑可视区域、滚动操作、画布层级关系，也有 `Canvas` 自身面临的一些性能问题，包括 `Canvas` 如何进行直出等，对开发的要求较高，但为了更好的用户体验，更倾向于 `Canvas` 渲染的实现方案。

我们通过分类收集视图元素，再进行逐类别渲染的方式，减少 `Canvas` 绘图引擎切换状态机的次数，降低性能损耗，优化渲染耗时。

| 顶层 |        |                      |
| ---- | ------ | -------------------- |
| ↑    | DOM    | 容器插件等非编辑渲染 |
| ↑    | Canvas | 选区渲染             |
| ↑    | Canvas | 内容高亮底色等       |
| 底层 |        |                      |

# 开发

本项目基于 OpenHarmony 下的 JavaScript UI 框架，运行环境**请参考 [OpenHarmony 项目配置方法](https://gitee.com/isrc_ohos/ultimate-harmony-reference/blob/master/OpenHarmony%20JS%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B.md) 进行项目配置和运行。**

如果你不熟悉 OpenHarmony 的 JS 开发，**请参考该[官方文档](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-overview-0000001056361791)。**

# 运行

1. 下载 [OpenHarmonySheet](https://github.com/Wscats/sheet) 项目工程，将工程导入 DevEco Studio 进行编译构建及运行调试。
2. 进行编译构建，生成一个 HAP 应用安装包，生成 HAP 应用安装包。
3. 安装运行后，即可在设备上查看应用示例运行效果，以及进行相关调试。

# 鸣谢

- [X Spreadsheet](https://github.com/myliang/x-spreadsheet)
- [Tencent Doc](https://docs.qq.com)
