# FSEI-Backend

---
title: FSEI-Backend \n
language_tabs:
  - http: HTTP
  - javascript: JavaScript

---

# FSEI API DESIGN

Base URLs:

# Authentication

- HTTP Authentication, scheme: bearer

# Account

## GET Get Account

GET /api/v1/account/me

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Fields

## GET Get Fields

GET /api/v1/fields

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|name|query|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Field

POST /api/v1/fields

> Body Parameters

```json
{
  "name": "informatique"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Field

PATCH /api/v1/fields/65f8063050e6b8f43a112ebb

> Body Parameters

```json
{
  "name": "info"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Field

DELETE /api/v1/fields/65f8063050e6b8f43a112ebb

> Body Parameters

```json
{
  "firstName": "Khalil",
  "lastName": "Messabih",
  "registrationNumber": 123456,
  "email": "email@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» firstName|body|string| yes |none|
|» lastName|body|string| yes |none|
|» registrationNumber|body|integer| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Blogs

## GET Get Blogs

GET /api/v1/blogs

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Blog

POST /api/v1/blogs

> Body Parameters

```json
{
  "title": "Node Js",
  "content": "content",
  "imgLink": "img.png"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» content|body|string| yes |none|
|» imgLink|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Blog

PATCH /api/v1/blogs/65f818b33d974d778da3eb7e

> Body Parameters

```json
{
  "title": "Node Js",
  "content": "updated content",
  "imgLink": "img.png"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» content|body|string| yes |none|
|» imgLink|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Blog

DELETE /api/v1/blogs/65f818b33d974d778da3eb7e

> Body Parameters

```json
{
  "firstName": "Khalil",
  "lastName": "Messabih",
  "registrationNumber": 123456,
  "email": "email@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» firstName|body|string| yes |none|
|» lastName|body|string| yes |none|
|» registrationNumber|body|integer| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Auth

## POST Login

POST /api/v1/auth/login

> Body Parameters

```json
{
  "email": "email@gmail.com",
  "password": "7VxMyUx61v"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» email|body|string| yes |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Announcements

## GET Get Announcements

GET /api/v1/announcements

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Announcement

POST /api/v1/announcements

> Body Parameters

```json
{
  "imgLink": "link",
  "redirectUrl": "url"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» imgLink|body|string| yes |none|
|» redirectUrl|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Announcement

PATCH /api/v1/announcements/65f81ddf1365c7041ef28edb

> Body Parameters

```json
{
  "imgLink": "link",
  "redirectUrl": "new url"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» imgLink|body|string| yes |none|
|» redirectUrl|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Announcement

DELETE /api/v1/announcements/65f81ddf1365c7041ef28edb

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Admins

## POST Create Admin

POST /api/v1/admins

> Body Parameters

```json
{
  "email": "email@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Modules

## GET Get Modules

GET /api/v1/fields/65f80d6e6f7b5daacc4bc664/modules

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Module

POST /api/v1/fields/65f80d6e6f7b5daacc4bc664/modules

> Body Parameters

```json
{
  "name": "Algorithm 1",
  "level": "L1",
  "semester": "S1"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» level|body|string| yes |none|
|» semester|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Module

PATCH /api/v1/fields/65f80d6e6f7b5daacc4bc664/modules/65f826f70dee3a6bdef8971c

> Body Parameters

```json
{
  "name": "Algorithm 1",
  "level": "L1",
  "semester": "S1"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» level|body|string| yes |none|
|» semester|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Module

DELETE /api/v1/fields/65f80d6e6f7b5daacc4bc664/modules/65f826f70dee3a6bdef8971c

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Plannings

## GET Get Plannings

GET /api/v1/fields/65f80d6e6f7b5daacc4bc664/plannings

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Planning

POST /api/v1/fields/65f80d6e6f7b5daacc4bc664/plannings

> Body Parameters

```json
{
  "title": "title is not required",
  "imgLink": "img.png",
  "level": "L1",
  "semester": "S1"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» imgLink|body|string| yes |none|
|» level|body|string| yes |none|
|» semester|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Planning

PATCH /api/v1/fields/65f80d6e6f7b5daacc4bc664/plannings/65f8296b296a09a95840bbd7

> Body Parameters

```json
{
  "title": "title is not required",
  "imgLink": "img.png",
  "level": "L1",
  "semester": "S1"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» imgLink|body|string| yes |none|
|» level|body|string| yes |none|
|» semester|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Planning

DELETE /api/v1/fields/65f80d6e6f7b5daacc4bc664/plannings/65f8296b296a09a95840bbd7

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Projects

## GET Get Project

GET /api/v1/projects

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Project

POST /api/v1/projects

> Body Parameters

```json
{
  "name": "chat app",
  "description": "description about chat app",
  "imgLink": "img.png",
  "tags": [
    "tag1",
    "tag2"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» description|body|string| yes |none|
|» imgLink|body|string| yes |none|
|» tags|body|[string]| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Project

PATCH /api/v1/projects/65f82f46a71eb9e75f5c118c

> Body Parameters

```json
{
  "name": "chat app",
  "description": "description about chat app",
  "imgLink": "img.png",
  "tags": [
    "tag1",
    "tag2"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» description|body|string| yes |none|
|» imgLink|body|string| yes |none|
|» tags|body|[string]| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Project

DELETE /api/v1/projects/65f82eea519e8d207bd7d8bb

> Body Parameters

```json
{
  "firstName": "Khalil",
  "lastName": "Messabih",
  "registrationNumber": 123456,
  "email": "email@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» firstName|body|string| yes |none|
|» lastName|body|string| yes |none|
|» registrationNumber|body|integer| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Resources

## GET Get Resources Module ID

GET /api/v1/modules/65f8302aa71eb9e75f5c1192/resources

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Resource

POST /api/v1/modules/65f8302aa71eb9e75f5c1192/resources

> Body Parameters

```json
{
  "title": "Algorithm 1",
  "type": "cours",
  "link": "chapitre1.pdf",
  "level": "L1"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» type|body|string| yes |none|
|» link|body|string| yes |none|
|» level|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## GET Get All Resources

GET /api/v1/resources

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Resource

PATCH /api/v1/modules/65f8302aa71eb9e75f5c1192/resources/65f83911c167e8d6e414e22d

> Body Parameters

```json
{
  "title": "Algorithm 1",
  "type": "cours",
  "link": "chapitre1.pdf",
  "level": "L1"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» type|body|string| yes |none|
|» link|body|string| yes |none|
|» level|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Resource

DELETE /api/v1/modules/65f8302aa71eb9e75f5c1192/resources/65f8362884113ac729a9f75b

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Students

## GET Get Students

GET /api/v1/students

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|registrationNumber|query|string| yes |none|
|name|query|string| yes |none|
|email|query|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## POST Create Student

POST /api/v1/students

> Body Parameters

```json
{
  "firstName": "Khalil",
  "lastName": "Messabih",
  "registrationNumber": 123456,
  "email": "email@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» firstName|body|string| yes |none|
|» lastName|body|string| yes |none|
|» registrationNumber|body|integer| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## PATCH Update Student

PATCH /api/v1/students/65f7d438b9f31f5efa7a7d46

> Body Parameters

```json
{
  "registrationNumber": 123
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» registrationNumber|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

## DELETE Remove Student

DELETE /api/v1/students/65f81387e20ced9c9ce373b6

> Body Parameters

```json
{
  "firstName": "Khalil",
  "lastName": "Messabih",
  "registrationNumber": 123456,
  "email": "email@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» firstName|body|string| yes |none|
|» lastName|body|string| yes |none|
|» registrationNumber|body|integer| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

### Responses Data Schema

# Data Schema

<h2 id="tocS_Tag">Tag</h2>

<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 1,
  "name": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||Tag ID|
|name|string|false|none||Tag Name|

<h2 id="tocS_Category">Category</h2>

<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 1,
  "name": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||Category ID|
|name|string|false|none||Category Name|

<h2 id="tocS_Pet">Pet</h2>

<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 1,
  "category": {
    "id": 1,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 1,
      "name": "string"
    }
  ],
  "status": "available"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||Pet ID|
|category|[Category](#schemacategory)|true|none||group|
|name|string|true|none||name|
|photoUrls|[string]|true|none||image URL|
|tags|[[Tag](#schematag)]|true|none||tag|
|status|string|true|none||Pet Sales Status|

#### Enum

|Name|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|


