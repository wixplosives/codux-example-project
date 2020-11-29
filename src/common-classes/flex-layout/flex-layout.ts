import { classes } from './flex-layout.st.css';

export const FlexLayout = {
    column: {
        alignToStart: classes.flexColumnAlignToStart,
        alignToEnd: classes.flexColumnAlignToEnd,
        alignToCenter: classes.flexColumnAlignToCenter,
        default: classes.flexColumnDefault,
    },
    row: {
        alignToStart: classes.flexRowAlignToStart,
        alignToEnd: classes.flexRowAlignToEnd,
        alignToCenter: classes.flexRowAlignToCenter,
        stretch: classes.flexRowStretch,
    },
    centerContent: classes.flexCenterContent,
    fillRemainingHorizontalSpace: classes.flexFillRemainingHorizontalSpace,
    fillRemainingVerticalSpace: classes.flexFillRemainingVerticalSpace,
    horizontallyJustifyToEnd: classes.flexHorizontallyJustifyToEnd,
    noShrink: classes.noShrink,
    alignSelf: {
        flexStart: classes.flexAlignSelfFlexStart,
        flexEnd: classes.flexAlignSelfFlexEnd,
        center: classes.flexAlignSelfCenter,
        stretch: classes.flexAlignSelfStretch,
    },
};

export enum FlexAlignment {
    FlexStart = 'flexStart',
    FlexEnd = 'flexEnd',
    Center = 'center',
    Stretch = 'stretch',
}
