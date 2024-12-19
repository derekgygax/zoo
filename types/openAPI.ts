export enum OPEN_API_FIELD_TYPE {
  STRING = "string",
  NUMBER = "number",
  INTEGER = "integer",
  BOOLEAN = "boolean",
  OBJECT = "object",
  ARRAY = "array",
  NULL = "null",
}

export enum OPEN_API_STRING_FORMAT {
  DATE = "date",
  DATE_TIME = "date-time",
  PASSWORD = "password",
  BYTE = "byte",
  BINARY = "binary",
  EMAIL = "email",
  UUID = "uuid",
  URI = "uri",
  HOSTNAME = "hostname",
  IPV4 = "ipv4",
  IPV6 = "ipv6",
}

export enum OPEN_API_PARAMETER_LOCATION {
  QUERY = "query",
  HEADER = "header",
  PATH = "path",
  COOKIE = "cookie",
}

export enum OPEN_API_HTTP_METHOD {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
  OPTIONS = "options",
  HEAD = "head",
  TRACE = "trace",
}

export enum OPEN_API_SCHEMA_KEYWORD {
  TITLE = "title",
  DESCRIPTION = "description",
  DEFAULT = "default",
  ENUM = "enum",
  TYPE = "type",
  FORMAT = "format",
  ITEMS = "items",
  PROPERTIES = "properties",
  REQUIRED = "required",
  ADDITIONAL_PROPERTIES = "additionalProperties",
  PATTERN = "pattern",
  MAXIMUM = "maximum",
  MINIMUM = "minimum",
  EXCLUSIVE_MAXIMUM = "exclusiveMaximum",
  EXCLUSIVE_MINIMUM = "exclusiveMinimum",
  MAX_LENGTH = "maxLength",
  MIN_LENGTH = "minLength",
  MAX_ITEMS = "maxItems",
  MIN_ITEMS = "minItems",
  UNIQUE_ITEMS = "uniqueItems",
  EXAMPLES = "examples",
  READ_ONLY = "readOnly",
  WRITE_ONLY = "writeOnly",
  DEPRECATED = "deprecated",
}

export enum OPEN_API_RESPONSE_KEYWORD {
  STATUS_CODE = "statusCode",
  CONTENT = "content",
  HEADERS = "headers",
  DESCRIPTION = "description",
  LINKS = "links",
}

export enum OPEN_API_SECURITY_SCHEME_TYPE {
  API_KEY = "apiKey",
  HTTP = "http",
  OAUTH2 = "oauth2",
  OPENID_CONNECT = "openIdConnect",
}

export enum OPEN_API_SECURITY_SCHEME_HTTP_SCHEME {
  BASIC = "basic",
  BEARER = "bearer",
  DIGEST = "digest",
}
