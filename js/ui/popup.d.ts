import {
    animationConfig
} from '../animation/fx';

import {
    positionConfig
} from '../animation/position';

import {
    dxElement
} from '../core/element';

import {
    template
} from '../core/templates/template';

import dxOverlay, {
    dxOverlayAnimation,
    dxOverlayOptions
} from './overlay';

export interface dxPopupOptions<T = dxPopup> extends dxOverlayOptions<T> {
    /**
     * @docid
     * @default { show: { type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } } }, hide: { type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } } }} [for](iOS)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @type object
     */
    animation?: dxPopupAnimation;
    /**
     * @docid
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    container?: string | Element | JQuery;
    /**
     * @docid
     * @default false
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dragEnabled?: boolean;
    /**
     * @docid
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fullScreen?: boolean;
    /**
     * @docid
     * @type_function_return number|string
     * @fires dxPopupOptions.onResize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    height?: number | string | (() => number | string);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResize?: ((e: { component?: T, element?: dxElement, model?: any }) => any);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResizeEnd?: ((e: { component?: T, element?: dxElement, model?: any }) => any);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResizeStart?: ((e: { component?: T, element?: dxElement, model?: any }) => any);
    /**
     * @docid
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 titleElement:dxElement
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onTitleRendered?: ((e: { component?: T, element?: dxElement, model?: any, titleElement?: dxElement }) => any);
    /**
     * @docid
     * @type Enums.PositionAlignment|positionConfig|function
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    position?: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top' | positionConfig | Function;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    resizeEnabled?: boolean;
    /**
     * @docid
     * @default false
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showCloseButton?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showTitle?: boolean;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    title?: string;
    /**
     * @docid
     * @default "title"
     * @type_function_param1 titleElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    titleTemplate?: template | ((titleElement: dxElement) => string | Element | JQuery);
    /**
     * @docid
     * @type Array<Object>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toolbarItems?: Array<dxPopupToolbarItem>;
    /**
     * @docid
     * @type_function_return number|string
     * @fires dxPopupOptions.onResize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    width?: number | string | (() => number | string);
}
export interface dxPopupAnimation extends dxOverlayAnimation {
    /**
     * @docid dxPopupOptions.animation.hide
     * @default { type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } }} [for](iOS)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hide?: animationConfig;
    /**
     * @docid dxPopupOptions.animation.show
     * @default { type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } }} [for](iOS)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    show?: animationConfig;
}
export interface dxPopupToolbarItem {
    /**
     * @docid dxPopupOptions.toolbarItems.disabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    disabled?: boolean;
    /**
     * @docid dxPopupOptions.toolbarItems.html
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    html?: string;
    /**
     * @docid dxPopupOptions.toolbarItems.location
     * @type Enums.ToolbarItemLocation
     * @default 'center'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    location?: 'after' | 'before' | 'center';
    /**
     * @docid dxPopupOptions.toolbarItems.options
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    options?: any;
    /**
     * @docid dxPopupOptions.toolbarItems.template
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    template?: template;
    /**
     * @docid dxPopupOptions.toolbarItems.text
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid dxPopupOptions.toolbarItems.toolbar
     * @type Enums.Toolbar
     * @default 'top'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toolbar?: 'bottom' | 'top';
    /**
     * @docid dxPopupOptions.toolbarItems.visible
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
    /**
     * @docid dxPopupOptions.toolbarItems.widget
     * @type Enums.ToolbarItemWidget
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    widget?: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton';
}
/**
 * @docid
 * @inherits dxOverlay
 * @hasTranscludedContent
 * @module ui/popup
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxPopup extends dxOverlay {
    constructor(element: Element, options?: dxPopupOptions)
    constructor(element: JQuery, options?: dxPopupOptions)
}

declare global {
interface JQuery {
    dxPopup(): JQuery;
    dxPopup(options: "instance"): dxPopup;
    dxPopup(options: string): any;
    dxPopup(options: string, ...params: any[]): any;
    dxPopup(options: dxPopupOptions): JQuery;
}
}
export type Options = dxPopupOptions;

/** @deprecated use Options instead */
export type IOptions = dxPopupOptions;
export type ToolbarItem = dxPopupToolbarItem;
