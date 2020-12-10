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
                XCOPY /Y ${WORKSPACE}\build\ C:\nginx-1.18.0\html\build 
            }
        }
	}
}