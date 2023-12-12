const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//get and return all the persons from the db
router.get("/", async (req, res) => {
  const persons = await prisma.person.findMany();
  res.send(persons);
});

//Gets and returns a specified person

router.get("/:id", async (req, res) => {
  const personId = parseInt(req.params.id);
  console.log(personId);
  const persons = await prisma.person.findUnique({
    where: { id: personId },
  });
  res.send(persons || { message: "This person does not exist" });
});

module.exports = router;
