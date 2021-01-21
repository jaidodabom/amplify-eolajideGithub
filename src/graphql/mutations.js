/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      phone_number
      username
      events {
        items {
          id
          title
          description
          status
          startAt
          createdAt
          updatedAt
        }
        nextToken
      }
      chats {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      phone_number
      username
      events {
        items {
          id
          title
          description
          status
          startAt
          createdAt
          updatedAt
        }
        nextToken
      }
      chats {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      phone_number
      username
      events {
        items {
          id
          title
          description
          status
          startAt
          createdAt
          updatedAt
        }
        nextToken
      }
      chats {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      description
      status
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      chats {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      startAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      description
      status
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      chats {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      startAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      description
      status
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      chats {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      startAt
      createdAt
      updatedAt
    }
  }
`;
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
      id
      content
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      event {
        id
        title
        description
        status
        user {
          id
          name
          email
          phone_number
          username
          createdAt
          updatedAt
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        startAt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
      id
      content
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      event {
        id
        title
        description
        status
        user {
          id
          name
          email
          phone_number
          username
          createdAt
          updatedAt
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        startAt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
      id
      content
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      event {
        id
        title
        description
        status
        user {
          id
          name
          email
          phone_number
          username
          createdAt
          updatedAt
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        startAt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      event {
        id
        title
        description
        status
        user {
          id
          name
          email
          phone_number
          username
          createdAt
          updatedAt
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        startAt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      event {
        id
        title
        description
        status
        user {
          id
          name
          email
          phone_number
          username
          createdAt
          updatedAt
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        startAt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        phone_number
        username
        events {
          nextToken
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      event {
        id
        title
        description
        status
        user {
          id
          name
          email
          phone_number
          username
          createdAt
          updatedAt
        }
        chats {
          nextToken
        }
        followers {
          nextToken
        }
        startAt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
