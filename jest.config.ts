import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  coverageDirectory: '../../coverage/apps/angular-monorepo-changed',
};
