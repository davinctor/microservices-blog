![NodeJS](https://img.shields.io/badge/-NodeJS-purple "NodeJS is using") ![React](https://img.shields.io/badge/-React-purple "React is using") ![Docker](https://img.shields.io/badge/-Docker-blue "Kubernetes is using") ![K8s](https://img.shields.io/badge/-K8s-blue "Kubernetes is using")
# Blog
The simple blog project builds on top of microservices architecture with a simple handwritten event bus.

## Microservices
The list of microservices in the project:
 - [**client**](https://hub.docker.com/repository/docker/vponomarenkoua/microservices-course-client) - a simple React app
 - [**posts**](https://hub.docker.com/repository/docker/vponomarenkoua/microservices-course-posts) - is resposible for managing posts
 - [**comments**](https://hub.docker.com/repository/docker/vponomarenkoua/microservices-course-comments) - is responsible for managing comments
 - [**moderation**](https://hub.docker.com/repository/docker/vponomarenkoua/microservices-course-moderation) - is responsible for moderating comments under the posts
 - [**query-service**](https://hub.docker.com/repository/docker/vponomarenkoua/microservices-course-query-service) - is responsible for returning ready data (increases reliability of the system)
 - [**event-bus**](https://hub.docker.com/repository/docker/vponomarenkoua/microservices-course-event-bus) - a simple event-bus built on top of HTTP

## Prerequisites to run
Prerequisites to run the project:
1. Installed [Docker](https://www.docker.com/)
2. Installed [Kubernetes](https://kubernetes.io/)
3. Installed [skaffold](https://skaffold.dev/)
4. Added to the systems hosts file the route rule.
The file location is `/etc/hosts`.
The rule for macOS:
```
# Local microservices routes
127.0.0.1 microservices-course-posts.route
```

## Run
0. Go to the project root folder
1. Run in the shell: `skaffold dev`. Waits until it started all services.
2. Open [microservices-course-posts.route](http://microservices-course-posts.route/) link in the browser

# License

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
