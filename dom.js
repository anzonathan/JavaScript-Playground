<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UI JS</title>
</head>
<body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
        const app = document.getElementById('app');

        const header = document.createElement('h1');
        const text = ['Nathaniel','Daniel','Precious'];

        headerContent = document.createTextNode(text);

        header.appendChild(headerContent);

        app.appendChild(header);

    </script>
</body>
</html>
