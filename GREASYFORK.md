# Greasy Fork 发布资料

以下内容可在脚本发布到 GitHub 后复制到 Greasy Fork 的“脚本介绍”页面。

## 脚本名称

小鹅通课程页面增强

## 简短描述

为小鹅通 PC 视频课程增加 YouTube 式双栏布局、无刷新切课、深浅色主题和原生课程链接。

## 详细介绍

本脚本通过页面右下方的设置按钮提供以下功能：

- 将视频课程调整为左侧大播放器、右侧独立滚动目录的双栏学习布局；
- 点击视频课时时只重新创建左侧播放器，右侧目录和页面主体保持不变，并支持浏览器后退和前进；
- 播放器“下一集”和自动连播同样使用无刷新切换；
- 自动连播时保持课程目录稳定，不再整块刷新或丢失滚动位置；
- 定位与设置按钮默认收在页面右侧边缘，鼠标靠近按钮周围或右侧滚动条时自动滑出；
- 可一键将当前播放小节定位到课程目录中央；
- 可分别调节目录中大章节和小节的字号；
- 深色模式下课程文字统一使用白色；
- 为切课、目录和设置面板增加平滑动画；
- 将“上次学习”标签移动到刚刚离开的课程，并显示在课程项末尾；
- 可选使用低饱和度、冷暖交替的色块区分不同大章节及其所属小节；
- 在浅色和深色页面配色之间切换；
- 为已解锁、可访问的课程生成真实链接，支持浏览器原生右键菜单、中键和 `Ctrl`/`Command` 点击；
- 按需阻止页面脚本接收标签可见性和窗口焦点变化，避免返回页面时自动刷新；
- 在小鹅通单页应用切换内容后自动重新应用设置。

脚本不发送任何额外网络请求，不包含统计、广告、推广或用户跟踪功能，也不会绕过课程登录、付费或访问权限。

## 效果预览

### 设置面板与章节彩色分组

![设置面板与章节彩色分组](https://raw.githubusercontent.com/laoedo/XiaoeTong-Enhanced/main/assets/preview-settings-and-chapters.png)

### 深色播放器与完整课程目录

![深色播放器与完整课程目录](https://raw.githubusercontent.com/laoedo/XiaoeTong-Enhanced/main/assets/preview-dark-course-catalog.png)

## 使用方法

1. 安装 Tampermonkey 或 Violentmonkey。
2. 点击 Greasy Fork 页面上的“安装此脚本”。
3. 重新打开或刷新小鹅通课程详情页。
4. 点击页面右下方的齿轮按钮选择所需功能。

## 注意事项

修改防刷新开关后需要刷新当前页面才能完全生效。该功能也可能影响课程页面原有的“切走自动暂停”或进度同步逻辑，首次使用请确认学习进度仍能正常保存。

## 源代码与问题反馈

- GitHub：<https://github.com/laoedo/XiaoeTong-Enhanced>
- 问题反馈：<https://github.com/laoedo/XiaoeTong-Enhanced/issues>
- Greasy Fork：<https://greasyfork.org/zh-CN/scripts/593938-%E5%B0%8F%E9%B9%85%E9%80%9A%E8%AF%BE%E7%A8%8B%E9%A1%B5%E9%9D%A2%E5%A2%9E%E5%BC%BA>

## 发布设置建议

- 脚本类型：用户脚本
- 主要语言：简体中文
- 许可证：MIT
- 成人内容：否
- 外部脚本：无
- 反功能（广告、跟踪、付费等）：无
- 版本：3.0.10

## GitHub 同步建议

- 源代码同步地址：<https://raw.githubusercontent.com/laoedo/XiaoeTong-Enhanced/main/%E5%B0%8F%E9%B9%85%E9%80%9A%E8%AF%BE%E7%A8%8B%E9%A1%B5%E9%9D%A2%E5%A2%9E%E5%BC%BA.user.js>
- 在 Greasy Fork 的“管理 → 源代码同步”中选择“自动”，网站会定期检查 GitHub 上的新版本。
- 如需 GitHub 推送后立即同步，可在启用源代码同步后继续配置 Greasy Fork Webhook。
- 附加介绍和截图可以填写本文件的 Raw 地址，或在发布新版本后手动复制本文件中的“详细介绍”和“效果预览”。

## 发布前检查

- [x] 将 Greasy Fork 安装地址回填到 GitHub 文档。
- [x] 在 Tampermonkey 中从最终代码重新安装并测试。
- [x] 确认课程播放与课程链接功能正常。
