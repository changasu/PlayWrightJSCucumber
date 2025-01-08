const fs = require('fs');
const path = require('path');

function generateStepDefinitions(featureFilePath, outputFilePath) {
  const featureFileContent = fs.readFileSync(featureFilePath, 'utf-8');
  const steps = featureFileContent.match(/(Given|When|Then) .*/g);

  if (!steps) {
    console.log('No steps found in the feature file.');
    return;
  }

  const stepDefinitions = steps
    .map((step) => {
      const keyword = step.split(' ')[0];
      const stepText = step.replace(`${keyword} `, '');
      return `${keyword}('${stepText}', async function () {\n  // TODO: Implement this step\n  return 'pending';\n});\n`;
    })
    .join('\n');

  fs.writeFileSync(outputFilePath, stepDefinitions, 'utf-8');
  console.log(`Step definitions generated in: ${outputFilePath}`);
}

// Example usage
const featureFilePath = path.join(__dirname, 'features/sampleLogin.feature');
const outputFilePath = path.join(__dirname, 'steps/generatedSteps.js');
generateStepDefinitions(featureFilePath, outputFilePath);