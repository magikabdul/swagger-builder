import { Rule } from '@angular-devkit/schematics';
import * as path from 'node:path';
import type { NgAddSchematicsSchema } from '../schema';

const DEVTOOL_MODULE_NAME = 'ComponentsDevtoolsModule';
const DEVTOOL_SERVICE_NAME = 'ComponentsDevtoolsMessageService';
const PACKAGE_NAME: string = require(path.resolve(__dirname, '..', '..', '..', 'package.json')).name;

/**
 * Register Devtools to the application
 * @param tree
 * @param context
 * @param options
 */
export const registerDevtools = async (options: NgAddSchematicsSchema): Promise<Rule> => {
  const { registerDevtoolsToApplication } = await import('@o3r/schematics');
  return registerDevtoolsToApplication({
    moduleName: DEVTOOL_MODULE_NAME,
    packageName: PACKAGE_NAME,
    serviceName: DEVTOOL_SERVICE_NAME,
    projectName: options.projectName
  });
};
