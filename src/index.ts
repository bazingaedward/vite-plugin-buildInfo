import { execSync } from 'child_process';
import { IndexHtmlTransformResult } from 'vite';

export default function BuildInfoPlugin() {
  return {
    name: 'vite-plugin-git-info',
    transformIndexHtml() {
      let branch = '';
      let commitHash = '';
      let tag = '';

      try {
        branch = execSync('git symbolic-ref --short -q HEAD').toString().trim();
        commitHash = execSync('git rev-parse --short HEAD').toString().trim();
        tag = execSync('git tag --points-at HEAD').toString().trim();
      } catch (error) {
        console.error('Failed to get Git info:', error);
      }

      const els: IndexHtmlTransformResult = [];

      if (branch) {
        els.push({
          tag: 'meta',
          injectTo: 'head-prepend',
          attrs: {
            name: 'git-branch',
            content: branch,
          },
        });
      }

      if (commitHash) {
        els.push({
          tag: 'meta',
          injectTo: 'head-prepend',
          attrs: {
            name: 'git-commitHash',
            content: commitHash,
          },
        });
      }

      if (tag) {
        els.push({
          tag: 'meta',
          injectTo: 'head-prepend',
          attrs: {
            name: 'git-tag',
            content: tag,
          },
        });
      }

      //   添加打包时间
      els.push({
        tag: 'meta',
        injectTo: 'head-prepend',
        attrs: {
          name: 'build-time',
          content: Date(),
        },
      });

      return els;
    },
  };
}
