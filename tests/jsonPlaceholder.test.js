import {test,describe, expect} from "@jest/globals";
import axios from 'axios';
import {API_URL} from "../src/api.js";

test('GET /todos/:id returns correct todo', async () => {
  const response = await axios.get(`${API_URL}/todos/1`);
  expect(response.status).toBe(200);
  expect(response.data).toMatchObject({
    id: 1,
    userId: expect.any(Number),
    title: expect.any(String),
    completed: expect.any(Boolean),
  });
});

test('GET /users/:id returns correct user', async () => {
  const response = await axios.get(`${API_URL}/users/1`);
  expect(response.status).toBe(200);
  expect(response.data).toMatchObject({
    id: 1,
    name: expect.any(String),
    username: expect.any(String),
    email: expect.any(String),
  });
});

test('GET /posts/:id returns correct post', async () => {
  const response = await axios.get(`${API_URL}/posts/1`);
  expect(response.status).toBe(200);
  expect(response.data).toMatchObject({
    id: 1,
    userId: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
  });
});

test('POST /posts creates a new post', async () => {
  const newPost = {
    title: 'Test Title',
    body: 'Test Body',
    userId: 1,
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
    postId: 1,
  };
  const response = await axios.post(`${API_URL}/comments`, newComment);
  expect(response.status).toBe(201);
  expect(response.data).toMatchObject(newComment);
});