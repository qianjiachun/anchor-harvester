// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'

// 使用中文
import { locale } from "element-plus"
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
locale(lang)

import {
  // ElAlert,
  ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  ElContainer,
  // ElDatePicker,
  ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  // ElImage,
  ElInput,
  // ElInputNumber,
  // ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  ElPagination,
  // ElPopconfirm,
  // ElPopover,
  ElPopper,
  // ElProgress,
  ElRadio,
  // ElRadioButton,
  ElRadioGroup,
  // ElRate,
  ElRow,
  // ElScrollbar,
  ElSelect,
  // ElSlider,
  // ElStep,
  // ElSteps,
  ElSubmenu,
  // ElSwitch,
  // ElTabPane,
  ElTable,
  ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
  // ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  // ElNotification,
} from 'element-plus';

const components: any = [
  // ElAlert,
  ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  ElContainer,
  // ElDatePicker,
  ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  // ElImage,
  ElInput,
  // ElInputNumber,
  // ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  ElPagination,
  // ElPopconfirm,
  // ElPopover,
  ElPopper,
  // ElProgress,
  ElRadio,
  // ElRadioButton,
  ElRadioGroup,
  // ElRate,
  ElRow,
  // ElScrollbar,
  ElSelect,
  // ElSlider,
  // ElStep,
  // ElSteps,
  ElSubmenu,
  // ElSwitch,
  // ElTabPane,
  ElTable,
  ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
]

const plugins: any = [
  // ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  // ElNotification,
]

export default (app: any) => {
    plugins.forEach((plugin: any) => {
        app.use(plugin);
    })
    components.forEach((component: any) => {
        app.component(component.name, component);
    })
}