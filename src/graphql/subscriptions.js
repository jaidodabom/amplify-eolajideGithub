/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat {
    onCreateChat {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat {
    onUpdateChat {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat {
    onDeleteChat {
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
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower {
    onCreateFollower {
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
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower {
    onUpdateFollower {
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
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower {
    onDeleteFollower {
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
