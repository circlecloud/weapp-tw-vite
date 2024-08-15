import type { IPluginContext } from '@tarojs/service'
import { modifyViteConfig } from './modifyViteConfig'

/**
 * 编译过程扩展
 */
export default (ctx: IPluginContext, pluginOpts) => {
  modifyViteConfig(ctx, pluginOpts)
}
