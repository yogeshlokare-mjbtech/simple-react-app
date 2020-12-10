pipeline {
    agent any
    
    tools {nodejs "node"}

	environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build' 
            }
        }
        stage('Test') {
            steps{
                echo 'Test Case'
            }
        }
         stage('Deliver') {
            steps {
                bat("xcopy build C:\\nginx-1.18.0\\html\\build /E /Y")
                echo 'Delivery Case'
            }
        }
	}
}