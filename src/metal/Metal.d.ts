export default class Metal {
    constructor();
    load(canvasName?: string): false | undefined;
    clear(): void;
    clearCanvas(fillStyle?: string): void;
    drawRectangleBorder(attributes: any): void;
    saveCtx(): void;
    restoreCtx(): void;
    drawFilledRectangle(attributes: any): void;
    drawCircle(attributes: any): void;
    drawTriangle(attributes: any): void;
    drawText(attributes: any): void;
    getCtxValues(attributes: any): void;
    translateCanvas(attributes: any): void;
    unTranslateCanvas(attributes: any): void;
    rotateCanvas(attributes: any): void;
}
//# sourceMappingURL=Metal.d.ts.map