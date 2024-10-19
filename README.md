# Inventory Management and Freshness Analysis System

This project focuses on automating inventory management and freshness analysis for fruits and vegetables using machine learning and blockchain. The system is designed to detect the freshness of items, extract relevant data from images, and manage inventory based on results. The architecture includes a client-side interface for inventory status, analytics, and alerts, while leveraging IPFS for data storage and Solana smart contracts for automated actions.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Hardware Specifications](#hardware-specifications)
- [System Overview](#system-overview)
- [Machine Learning Models](#machine-learning-models)
- [Data Flow](#data-flow)
- [Setup](#setup)
- [Future Improvements](#future-improvements)
- [License](#license)

## Technologies Used

1. **Frontend**: Next.js
2. **Backend**: FastAPI, Node.js
3. **Database**: IPFS
4. **Models**:
   - YOLOv11 (Object Detection, Quality/Freshness Analysis)
   - paddleocr (OCR Text Extraction)
5. **Containerization**: Docker
6. **Queue**: Kafka/Redis
7. **Languages**: Python, JavaScript
8. **Blockchain**: Solana Smart Contracts(Programs)

## Hardware Specifications

- Webcam
- Computer with Internet Connectivity

## Dataset

- https://universe.roboflow.com/flipkartgrid-ejnjo/flipkartgrid-ocr/dataset/5/images?split=test
- 

## System Overview

The system provides an automated pipeline for inventory management and freshness analysis, using multiple machine learning models for text extraction, object detection, and freshness scoring.

1. **Client Side**:
   - Authentication and photo upload.
   - Inventory status, analytics, and alert generation.
   
2. **Processing Queue**:
   - Kafka or Redis queues handle asynchronous processing of data uploaded by clients.
   
3. **Machine Learning Pipeline**:
   - **Text Analysis**: Extract text from images using YOLOv11 and Paddleocr.
   - **Object Detection**: Detect objects (fruits/vegetables) using YOLOv11.
   - **Quality Check**: Perform freshness analysis using YOLOv11.
   
4. **Results Aggregator**:
   - Aggregates the output from all models (text, object data, freshness score).
   - Data stored on IPFS, and actions triggered through smart contracts.

5. **Smart Contract**:
   - Automatically reorder inventory or alert staff if items are expired or non-fresh.
   
## Data Flow

1. Client uploads a photo for analysis.
2. Image is processed through a Kafka/Redis queue.
3. Machine learning pipeline extracts text, detects objects, and evaluates freshness.
4. Aggregated results are sent back to the client, with potential alerts or automatic actions based on freshness status.
5. Data stored on IPFS, and Solana smart contracts trigger further actions like reordering or dispatching items.

## Deployed :

Demo Credentials : 
username : test@example.com
password : password123


### Key Future Enhancements:

1. **User Purchase Interface**: 
   - Provide an interface for users to directly purchase items based on the freshness evaluation.
   
2. **Real-Time Detection**: 
   - Enable real-time image analysis using live webcam feeds or IoT devices for faster, more responsive detection.
   
3. **Backend for Result Aggregation**:
   - Build a backend to manage the flow of results, storing and processing them efficiently, while ensuring data consistency across different clients.

4. **Notifications**:
   - Integrate notifications via SMS, email, or push notifications for alerts such as expiring inventory or freshness issues.

5. **Blockchain Integration**:
   - Expand the role of Solana smart contracts to include more comprehensive data logging, inventory audits, and reorder management directly on-chain.


