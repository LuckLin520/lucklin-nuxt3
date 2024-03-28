  // git凭证ID
def git_auth = "***"
// git的URL地址
def git_url = "https://github.com/LuckLin520/lucklin-nuxt3.git"

node {
    stage('拉取代码') {
        checkout scmGit(branches: [[name: "*/tbb-official"]], extensions: [], userRemoteConfigs: [[credentialsId: "${git_auth}", url: "${git_url}"]])
    }
    stage('Build Docker Image') {
        script{

            def appName = "tbb-official-web"
            // 设置镜像名称和标签
            def imageName = "${appName}:latest"
    
            // 构建Docker镜像
            sh "docker build --build-arg BUILD_ENV=test --build-arg BUILD_PORT=3000 -t ${imageName} ."
    
            // 将Docker镜像保存为tar文件
            sh "docker save -o ${appName}.tar ${imageName}"
    
            // 通过SSH发送镜像tar文件到服务器
            sshPublisher(publishers: [sshPublisherDesc(
                configName: 'your_server_config', 
                transfers: [
                    sshTransfer(
                        cleanRemote: true, 
                        excludes: '', 
                        execCommand: "docker load -i /docker_images/${appName}.tar && docker run --name ${appName} -d -p 3000:3000 ${imageName}", // 在服务器上加载和运行镜像的命令
                        execTimeout: 120000, 
                        flatten: false, 
                        makeEmptyDirs: false, 
                        noDefaultExcludes: false, 
                        patternSeparator: '\\n', 
                        remoteDirectory: '/docker_images', // 服务器上保存镜像tar文件的路径
                        removePrefix: '', 
                        sourceFiles: "${appName}.tar" // 要传输的tar文件
                    )
                ], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true
            )])
        }

    }
}