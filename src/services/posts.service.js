const prisma = require("../db");

async function createPost(data) {
  const { imageUrl, caption, location } = data;
  return await prisma.post.create({
    data: {
      imageUrl,
      caption: caption !== undefined ? caption : null,
      location: location !== undefined ? location : null,
    },
  });
}

async function listPosts() {
  return await prisma.post.findMany();
}

async function getPostById(id) {
  return await prisma.post.findUnique({
    where: { id: Number(id) },
  });
}

async function updatePost(id, data) {
  return await prisma.post.update({
    where: { id: Number(id) },
    data,
  });
}

async function deletePost(id) {
  return await prisma.post.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  createPost,
  listPosts,
  getPostById,
  updatePost,
  deletePost,
};
