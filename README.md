# 🚀 Full-Stack Employee Management System

A production-style full-stack application deployed using **Docker** and **Kubernetes** with complete DevOps workflow implementation.

---

## 📌 Tech Stack

### Frontend
- React.js
- Nginx

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### DevOps Tools
- Docker
- Kubernetes
- Minikube
- Docker Compose
- Nginx Ingress Controller

---

# ✨ Features

✅ Dockerized frontend & backend applications  
✅ Kubernetes deployments & services  
✅ PostgreSQL persistent storage  
✅ Nginx reverse proxy configuration  
✅ ConfigMaps & Secrets implementation  
✅ Ingress-based traffic routing  
✅ Real-world troubleshooting & debugging  

---

# 🏗️ Project Architecture

```text
User
  ↓
Ingress Controller
  ↓
Nginx Reverse Proxy
  ↓
Frontend (React)
  ↓
Backend API (Node.js + Express)
  ↓
PostgreSQL Database
```

---

# 🐳 Docker Setup

## Build Images

```bash
docker build -t frontend-app ./frontend
docker build -t backend-app ./backend
```

## Run Containers

```bash
docker-compose up --build
```

---

# ☸️ Kubernetes Deployment

## Start Minikube

```bash
minikube start
```

## Deploy Application

```bash
kubectl apply -f k8s/
```

## Verify Resources

```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

---

# 🔐 Kubernetes Components Used

| Component | Purpose |
|---|---|
| Deployment | Manage application pods |
| Service | Internal communication |
| Ingress | External traffic routing |
| ConfigMap | Store environment variables |
| Secret | Secure sensitive data |
| PVC | Persistent database storage |

---

# 🧠 Key Learnings

- Docker containerization
- Kubernetes orchestration
- Ingress routing
- Persistent storage management
- Secure configuration handling
- Real-world debugging workflows

---

# 🚀 Future Improvements

- Jenkins CI/CD integration
- GitHub Actions automation
- AWS EKS deployment
- Prometheus & Grafana monitoring

---

# 👨‍💻 Author

### Sanket Laxman Patil

- GitHub: https://github.com/SANKET-tech22
- LinkedIn: Add-Your-Link

---

# ⭐ Project Status

✅ Completed  
✅ Fully Functional  
✅ Kubernetes Deployed  
