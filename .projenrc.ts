import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.60.0',
  defaultReleaseBranch: 'main',
  name: '@yicr/aws-daily-wake-up-caller',
  description: 'AWS Daily wake up caller.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'connect', 's3'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-daily-wake-up-caller.git',
  // deps: [
  //   '@yicr/secure-bucket',
  // ],
  // devDeps: [
  // ],
  // peerDeps: [
  //   '@yicr/secure-bucket',
  // ],
});
project.synth();