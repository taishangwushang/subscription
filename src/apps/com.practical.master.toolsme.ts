import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.practical.master.toolsme',
  name: '实用大师',
  groups: [
    {
      name: '[ChangeMe]规则名称-2023-12-04 16:43:58',
      key: 0,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches: ['Image[text=""]'],
          snapshotUrls: ['https://i.gkd.li/import/13543279'],
          exampleUrls: [
            'https://m.gkd.li/58279234/c8e30547-2336-4e10-b75a-cb99af8f2042',
          ],
        },
      ],
    },
    {
      name: '[ChangeMe]规则名称-2023-12-04 17:23:34',
      key: 1,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          matches: [
            'ImageView[id="com.byted.pangle:id/tt_reward_full_count_down_after_close"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13544145'],
          exampleUrls: [
            'https://m.gkd.li/58279234/347dcc40-4728-47c7-ac6a-b11766ec6a6d',
          ],
        },
      ],
    },
  ],
});
