import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.video',
  name: '小米视频',
  groups: [
    {
      name: '[ChangeMe]规则名称-2023-12-05 10:54:15',
      key: 0,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: ['com.miui.video.feature.main.MainTabActivity'],
          matches: ['Button[id="com.miui.video:id/close_btn"]'],
          snapshotUrls: ['https://i.gkd.li/import/13554496'],
          exampleUrls: [
            'https://m.gkd.li/58279234/fdfa6804-9628-4a27-b5de-86ec6d44cc94',
          ],
        },
      ],
    },
    {
      name: '[ChangeMe]规则名称-2023-12-05 10:53:11',
      key: 1,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: ['com.miui.video.feature.main.MainTabActivity'],
          matches: ['ImageView[id="com.miui.video:id/v_icon"]'],
          snapshotUrls: ['https://i.gkd.li/import/13554375'],
          exampleUrls: [
            'https://m.gkd.li/58279234/77e1cee5-0743-40a9-ab37-e73490c591aa',
          ],
        },
      ],
    },
  ],
});
