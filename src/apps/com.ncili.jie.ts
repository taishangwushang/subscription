import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ncili.jie',
  name: 'BT磁力下载器',
  groups: [
    {
      name: '[ChangeMe]规则名称-2023-12-04 17:40:51',
      key: 0,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          matches: ['[id="com.ncili.jie:id/skip_view2"]'],
          snapshotUrls: ['https://i.gkd.li/import/13544299'],
          exampleUrls: [
            'https://m.gkd.li/58279234/fdda12a5-3a0a-450e-947e-73b48c1667da',
          ],
        },
      ],
    },
  ],
});
