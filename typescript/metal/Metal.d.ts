export default class Metal {
    constructor();
    load(canvasName?: string): boolean;
    clear(): void;
    clearCanvas(fillStyle?: string): void;
    drawRectangleBorder(attributes: any): void;
    saveCtx(): void;
    restoreCtx(): void;
    drawRectangle(attributes: any): void;
    drawCircle(attributes: any): void;
    drawTriangle(attributes: any): void;
    drawRectangleTitle(attributes: any): void;
    drawText(attributes: any): void;
    getCtxValues(attributes: any): void;
    translateCanvas(attributes: any): void;
    unTranslateCanvas(attributes: any): void;
    rotateCanvas(attributes: any): void;
    drawEllipse(): void;
}
