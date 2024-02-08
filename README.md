# Google Drive Clone - Local Image Storage Server

## Introduction

This repository contains a simple Node.js backend server that mimics the functionality of Google Drive for local image storage. It allows you to upload, store, and view images directly from your laptop, using your phone as a client. No additional applications are required; just connect your laptop and phone to the same network.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/drive-server.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd drive-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Server

In the backend directory, run:

```bash
npm run dev
```

This will start the server locally.

### Accessing from Phone

1. Ensure your laptop and phone are connected to the same network.

2. Find the local IP address of your laptop. In the terminal, run:

   ```bash
   ipconfig getifaddr en0
   ```

   You will get an IP address (e.g., `172.16.253.12`).

3. On your phone's browser, enter the following address:

   ```
   http://<your-laptop-ip>:5050
   ```

   Replace `<your-laptop-ip>` with the actual IP address obtained in step 2.

Now, you should be able to access your local drive from your phone and manage images.

## Notes

- Ensure that both devices are on the same network for seamless connectivity.
- The default port for the server is set to `5050`, but you can modify it in the server configuration if needed.

Feel free to contribute, report issues, or make suggestions!
