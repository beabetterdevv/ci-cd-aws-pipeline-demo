// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
// import * as CiCdAwsPipelineDemo from '../lib/ci-cd-aws-pipeline-demo-stack';

import { handler } from "../lib/lambda/handler";

//https://docs.aws.amazon.com/codebuild/latest/userguide/test-reporting.html
test('foo', async () => {
    const result = await handler("", "");
    expect(result.statusCode).toEqual(300);
});
