const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const PORT = 8000;
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 1000);
    });
    next();
});

// authorization not required
server.post('/sign-in', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const user = users.find(
            (user) => user.username === username && user.password === password,
        );
        if (user) {
            return res.json({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            });
        }

        return res.status(401).json({ message: 'Неверный логин или пароль' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
server.get('/todos', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { todos = [] } = db;

        return res.json(todos);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
server.put('/todos/:id', (req, res) => {
    try {
        let db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { todos = [] } = db;

        const todo = todos.find(
            (todo) => todo.id === parseInt(req.params?.id)
        );
        if (!todo) {
            return res.status(404).json({ message: 'Запись не найдена' });
        }

        db.todos = todos.map(todo => todo.id === parseInt(req.params?.id) ? {...todo, completed: !todo.completed} : todo);
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db));

        return res.json(db.todos);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
server.post('/todos', (req, res) => {
    try {
        let db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { todos = [] } = db;
        todos.push({
            id: todos.length + 1,
            title: req.body.title,
            completed: false
        });
        db.todos = [...todos];
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db));

        return res.json(db.todos);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
server.get('/goods', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { goods = [] } = db;

        return res.json(goods);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
server.post('/goods', (req, res) => {
    try {
        let db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { goods = [] } = db;
        goods.push({
            id: goods.length + 1,
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
        });
        db.goods = [...goods];
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db));

        return res.json(db.goods);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});
server.put('/goods/:id', (req, res) => {
    try {
        let db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { goods = [] } = db;

        const good = goods.find(
            (good) => good.id === parseInt(req.params?.id)
        );
        if (!good) {
            return res.status(404).json({ message: 'Запись не найдена' });
        }

        db.goods = goods.map(good => good.id === parseInt(req.params?.id)
            ? {
                ...good,
                title: req.body.title,
                image: req.body.image,
                description: req.body.description,
                price: req.body.price
            }
            : good);
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db));

        return res.json({ message: 'Запись успешно отредактирована' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Пользователь не авторизован' });
    }

    next();
});
// authorization required

server.use(router);

server.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});
