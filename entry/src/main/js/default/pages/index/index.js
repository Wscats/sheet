import prompt from '@system.prompt';
import Table from './sheet/';
import Viewport from './sheet/viewport.js';
export default {
    data: {
        sheet: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [{
                text: 'Hello World!',
                style: {
                    color: 'blue'
                }
            }, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

        ]
    },
    touchstart(evt) {
        const cell = this.viewport.cell(evt.touches[0].localX, evt.touches[0].localY);
        this.table.$onClick(...cell, evt);
        this.setTextarea(...cell, evt);
    },
    setTextarea(type, cellRect) {
        const textarea = this.textarea;
        const area = this.area;
        textarea.style.display = 'none';
        area.style.display = 'none';
        switch (type) {
            case 4:
                const { col, height, row, width, x, y } = cellRect;
                let showValue = this.sheet[row][col];
                showValue = typeof showValue === 'string' || typeof showValue === 'number' ?
                    showValue : showValue.text
                prompt.showToast({
                    message: `当前值:${showValue} 位置:第${row + 1}行 第${col + 1}列`,
                    duration: 3000,
                });
                textarea.style.display = 'flex';
                area.style.display = 'flex';
                const frames = [
                    { transform: { translate: '-120px -0px' }, opacity: 0.1, offset: 0.0 },
                ];
                const options = {
                    width: '100px',
                };
                this.$element('area').animate(frames, options);
                textarea.style.width = width - 8 + 'px';
                textarea.style.height = height - 4 + 'px';
                area.style.left = x - 2 + 'px';
                area.style.top = y - 1 + 'px';
                const value = this.sheet[row][col];
                textarea.value = typeof value === 'string' || typeof value === 'number' ?
                    value : value.text;
                break;
        }
    },
    touchend(evt) {
        const range = this.viewport.range(evt.changedTouches[0].localX, evt.changedTouches[0].localY);
        this.table.selection(range);
        this.viewport.render(this.table.$draw);
    },
    longpress(evt) {
        prompt.showDialog({
            buttons: [{
                text: '1. 初始化值，修改3行3列为红色8848',
                color: '#666666',
            }, {
                text: '2. 合并单元格，修改行头部和冻结C6',
                color: '#666666',
            }, {
                text: '3. 修改起始行，清空列表数据',
                color: '#666666',
            }],
            success: (data) => {
                switch (data.index) {
                    case 0:
                        this.table.cell((ri, ci) => {
                            if (ri === 2 && ci === 2) {
                                return {
                                    text: '8848',
                                    style: {
                                        color: 'red'
                                    }
                                }
                            }
                            return this.sheet[ri][ci];
                        }).render();
                        break;
                    case 1:
                        this.table.colHeader({ height: 50, rows: 2, merges: ['A1:C1', 'D1:D2'] })
                            .merges(['G9:H11', 'B9:D11'])
                            .freeze('C6')
                            .render();
                        break;
                    case 2:
                        this.table
                            .scrollRows(2)
                            .scrollCols(1)
                            .cell((ri, ci) => {
                                return '';
                            }).render();
                        break;
                }
            },
        });
    },
    onShow() {
        this.el = this.$refs.canvas;
        this.textarea = this.$refs.textarea;
        this.area = this.$refs.area;

        this.table = Table.create(this.el, 850, 800)
            .cell((ri, ci) => this.sheet[ri][ci])
            .render();
        this.viewport = new Viewport(this.table);
    },
}
