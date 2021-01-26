def cvRepoComplete = true;

pipeline {
    agent {
        label 'jocelyne-asus||reinhart-pc1||reinhart-pc2'
    }
    stages {
        stage('Initialize workspace directory'){
            steps {
                // git branch: 'master', changelog: false, credentialsId: '65b57eb1-4c1f-4b0d-aabf-1e924949b4e5', poll: false, url: 'git@github.com:reinhart1010/reinhart1010.github.io'
                script {
                    try {
                        if (isUnix()) {
                            sh "git init"
                            //sh "git remote add -f github git@github.com:reinhart1010/reinhart1010.github.io"
                            sh "git remote add -f gitlab git@gitlab.com:reinhart1010/reinhart1010.gitlab.io.git"
                        } else {
                            bat "git init"
                            //bat "git remote add -f github git@github.com:reinhart1010/reinhart1010.github.io"
                            bat "git remote add -f gitlab git@gitlab.com:reinhart1010/reinhart1010.gitlab.io.git"
                        }
                    }
                    catch(e) {
                        echo "Git has been initialized"
                    }
                }
            }
        }
        stage('Merge commits from GitHub and GitLab'){
            steps {
                script {
                    if (isUnix()) {
                        sh "git merge github/master --allow-unrelated-histories"
                        sh "git merge gitlab/master --allow-unrelated-histories"
                    } else {
                        bat "git merge github/master --allow-unrelated-histories"
                        bat "git merge gitlab/master --allow-unrelated-histories"
                    }
                }
            }
        }
        stage('Install dependencies'){
            steps {
                script {
                    if (isUnix()) {
                        sh "bundle update && bundle install"
                    } else {
                        bat "bundle update && bundle install"
                    }
                }
            }
        }
        stage('Build'){
            steps {
                script {
                    if (isUnix()) {
                        sh "bundle exec jekyll build"
                    } else {
                        bat "bundle exec jekyll build"
                    }
                }
            }
        }
        stage('Commit builds'){
            steps {
                script {
                    if (isUnix()) {
                        sh "git config user.name \"Reinhart Previano Koentjoro\""
                        sh "git config user.email \"reinhart_previano@yahoo.com\""
                        sh "git add * && git commit -m \"Data Update " + new Date().format("yyMMdd.HHmm", TimeZone.getTimeZone('UTC')) + "\" && git push origin github HEAD:master && git push origin gitlab HEAD:refs/heads/master"
                    } else {
                        bat "git config user.name \"Reinhart Previano Koentjoro\""
                        bat "git config user.email \"reinhart_previano@yahoo.com\""
                        bat "git add * && git commit -m \"Data Update " + new Date().format("yyMMdd.HHmm", TimeZone.getTimeZone('UTC')) + "\" && git push origin github HEAD:master && git push origin gitlab HEAD:refs/heads/master"
                    }
                }
            }
        }
    }
}