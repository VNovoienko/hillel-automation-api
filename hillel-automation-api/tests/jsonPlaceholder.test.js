import {test,describe, expect} from "@jest/globals";
import axios from 'axios';
import {API_URL} from "../src/api.js";

const todoId = 1;
const userId = 1;
const postId = 1;

test('GET /todos/:id returns correct todo', async () => {
  const response = await axios.get(`${API_URL}/todos/${todoId}`);
  expect(response.status).toBe(200);
  expect(response.data).toMatchObject({
    id: todoId,
    userId: expect.any(Number),
    title: expect.any(String),
    completed: expect.any(Boolean),
  });
});

test('GET /users/:id returns correct user', async () => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  expect(response.status).toBe(200);
  expect(response.data).toMatchObject({
    id: userId,
    name: expect.any(String),
    username: expect.any(String),
    email: expect.any(String),
  });
});

test('GET /posts/:id returns correct post', async () => {
  const response = await axios.get(`${API_URL}/posts/${postId}`);
  expect(response.status).toBe(200);
  expect(response.data).toMatchObject({
    id: postId,
    userId: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
  });
});

test('POST /posts creates a new post', async () => {
  const newPost = {
    title: 'Test Title',
    body: 'Test Body',
    userId: userId,
  };
  const response = await axios.post(`${API_URL}/posts`, newPost);
  expect(response.status).toBe(201);
  expect(response.data).toMatchObject(newPost);
});

test('POST /comments creates a new comment', async () => {
  const newComment = {
    name: 'Test Name',
    email: 'test@example.com',
    body: 'Test Comment',
    postId: postId,
  };
  const response = await axios.post(`${API_URL}/comments`, newComment);
  expect(response.status).toBe(201);
  expect(response.data).toMatchObject(newComment);
});