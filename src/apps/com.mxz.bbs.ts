import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mxz.bbs',
  name: '墨轩竹',
  groups: [
    {
      name: '[ChangeMe]规则名称-2023-12-04 17:26:53',
      key: 0,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: ['io.dcloud.PandoraEntry'],
          matches: ['TextView[text*="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/import/13544162'],
          exampleUrls: [
            'https://m.gkd.li/58279234/f599a92e-0a65-40d7-9a5d-03815081c22b',
          ],
        },
      ],
    },
  ],
});
