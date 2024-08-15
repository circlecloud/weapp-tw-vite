import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';
import { UnifiedViteWeappTailwindcssPlugin } from "weapp-tailwindcss/vite";

export function modifyViteConfig(ctx: IPluginContext, options?: any) {
    ctx.modifyViteConfig?.(({ viteConfig }) => {
        console.log(chalk.blue(`✨ weapp-tw-vite 临时解决 postcss 不加载的问题!`));
        viteConfig.plugins.push(
            UnifiedViteWeappTailwindcssPlugin(options ?? {}),
        );
        viteConfig.css = {
            postcss: {
                plugins: [
                    require("tailwindcss")(),
                    require("autoprefixer")()
                ]
            }
        }
    });
}