import { durationFilter } from "../filters/durationFilter";
import imageDirective from "../directives/imageDirective"

export function install(Vue) {
  Vue.filter('durationFilter', durationFilter)
  Vue.directive('imageDirective', imageDirective)
}