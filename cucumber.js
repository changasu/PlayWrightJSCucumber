module.exports = {
    default: {
      // Path to your feature files
      paths: [
        'features/**/*.feature'
      ],
  
      // Path to your step definition files
      require: [
        'features/step_definitions/*.js'
      ],

      // Format options for Allure and other reporters
      formatOptions: {
        snippetInterface: 'async-await',
        resultsDir: 'allure-results', // For Allure report results
      },
  
      // Report formats (HTML, Allure, JSON, etc.)
      format: [
        // Cucumber JSON Report
        'json:reports/cucumber-report.json', 
  
        // Cucumber HTML Report
        'html:reports/cucumber-report.html',
  
        // Summary Report
        'summary',
  
        // Progress Bar (for better visualization in the terminal)
        'progress-bar',
  
        // Allure Report using allure-cucumberjs reporter
        'allure-cucumberjs/reporter',
      ],
    }
  };  