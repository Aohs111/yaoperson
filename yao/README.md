# 夏的二十一个人网站

这是一个基于Spring Boot和Thymeleaf的个性化个人网站项目。

## 项目说明

本项目使用Java Spring Boot框架作为后端，前端使用HTML、CSS和JavaScript实现。网站具有以下特点：

1. 彩色渐变背景，提供现代化视觉效果
2. 居中大标题："欢迎来到'夏的二十一'特有网址呦"
3. 中央四张图片轮播展示
4. 个人幽默介绍区域
5. 素材图片展示区
6. 社交媒体链接（抖音、微博、小红书）

## 项目结构

```
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/summer21/
│   │   │       ├── controller/
│   │   │       │   └── HomeController.java
│   │   │       └── Summer21Application.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── css/
│   │       │   │   └── style.css
│   │       │   └── js/
│   │       │       └── script.js
│   │       ├── templates/
│   │       │   └── index.html
│   │       └── application.properties
├── images/
│   └── [图片资源文件]
├── pom.xml
└── README.md
```

## 运行方法

1. 安装JDK 11或更高版本
2. 安装Maven
3. 在项目根目录执行：
   ```
   mvn spring-boot:run
   ```
4. 在浏览器中访问：http://localhost:8080

## 技术栈

- 后端：Java Spring Boot 2.7.5
- 模板引擎：Thymeleaf
- 前端：HTML5, CSS3, JavaScript
- 构建工具：Maven

## 图片来源

项目中的图片素材位于`images`文件夹中，包括：
- 首页轮播图片
- 照片墙展示图片

## 定制说明

如需修改个人信息或图片，可以编辑`src/main/resources/templates/index.html`文件。社交媒体链接也可在此文件中进行修改。 