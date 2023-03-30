import * as crypto from 'crypto';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
//import * as scheduler from 'aws-cdk-lib/aws-scheduler';
import { Construct } from 'constructs';

export class Hello {
  public sayHello() {
    return 'hello, world!';
  }
}

export class DailyWakeUpCaller extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // 👇Create S3 Bucket

    // 👇Create S3 Bucket Policy

    // 👇Lambda Execution role

    // 👇Lambda Function

    // 👇Scheduler Execution Role

    // 👇Scheduler

  }
}