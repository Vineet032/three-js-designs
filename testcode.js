let mouseY = 0;
   function handleMouseMove(event) {
        const { clientY } = event;
        const { innerHeight } = window;
        mouseY = (clientY / innerHeight) * 2 - 1;

        const moveSpeed = 0.5; 
        const maxCameraPositionY = 50;

        const cameraPositionY = moveSpeed * mouseY * maxCameraPositionY;
        camera.position.y = Math.min(Math.max(cameraPositionY, -maxCameraPositionY), maxCameraPositionY);
      }

      document.addEventListener('mousemove', handleMouseMove);