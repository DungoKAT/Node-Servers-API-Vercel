import express from "express";
import cors from "cors";
import Servers from "./Servers.js";

const app = express();
const port = 8080;

const categories = [
    "Gaming",
    "Entertainment",
    "Education",
    "Science & Tech",
    "Music",
];

const formatText = (text) => {
    return text.replace(/ /g, "").toLowerCase();
};

const splitText = (text) => {
    return text.split(/[ .:;?!~_\-,`"&|()<>{}\[\]\r\n/\\]+/);
};

const filterServerRecord = (record, queryText) => {
    const foundRecord = record.filter((server) => {
        const serverNameFormat = formatText(server.name);
        const descriptionFormat = formatText(server.description);
        const boolCheck = queryText.map((text) => {
            return (
                serverNameFormat.includes(text) ||
                descriptionFormat.includes(text)
            );
        });
        if (boolCheck.includes(true)) {
            return true;
        } else {
            return false;
        }
    });
    return foundRecord;
};

app.use(cors());
app.use(express.json());

app.get("/servers", (req, res) => {
    if (req.query.query !== undefined) {
        const queryText = splitText(req.query.query);
        console.log("Query: ", queryText);
        if (filterServerRecord(Servers, queryText)) {
            res.status(200).json(filterServerRecord(Servers, queryText));
        } else {
            res.status(404).json({ message: "Not found" });
        }
    } else {
        res.status(200).json(Servers);
    }
});

categories.map((categoryName) => {
    const categoryPath = formatText(categoryName);
    app.get(`/servers/${categoryPath}`, (req, res) => {
        const foundRecord = Servers.filter((server) =>
            server.category.main.includes(categoryName)
        );
        if (req.query.query !== undefined) {
            const queryText = splitText(req.query.query);
            if (filterServerRecord(foundRecord, queryText)) {
                res.status(200).json(
                    filterServerRecord(foundRecord, queryText)
                );
            } else {
                res.status(404).json({ message: "Not found" });
            }
        } else {
            if (foundRecord) {
                res.status(200).json(foundRecord);
            } else {
                res.status(404).json({ message: "Not found" });
            }
        }
    });
});

app.get("/servers/:serverPathName", (req, res) => {
    const { serverPathName } = req.params;
    const foundRecord = Servers.find(
        (server) => server.pathname === serverPathName
    );
    if (foundRecord) {
        res.status(200).json(foundRecord);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
