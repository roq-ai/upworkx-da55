/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model bid
 *
 */
export type bid = $Result.DefaultSelection<Prisma.$bidPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model freelancer
 *
 */
export type freelancer = $Result.DefaultSelection<Prisma.$freelancerPayload>;
/**
 * Model project
 *
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bids
 * const bids = await prisma.bid.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bids
   * const bids = await prisma.bid.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **bid** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bids
   * const bids = await prisma.bid.findMany()
   * ```
   */
  get bid(): Prisma.bidDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.freelancer`: Exposes CRUD operations for the **freelancer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Freelancers
   * const freelancers = await prisma.freelancer.findMany()
   * ```
   */
  get freelancer(): Prisma.freelancerDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.projectDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    bid: 'bid';
    company: 'company';
    freelancer: 'freelancer';
    project: 'project';
    review: 'review';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'bid' | 'company' | 'freelancer' | 'project' | 'review' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      bid: {
        payload: Prisma.$bidPayload<ExtArgs>;
        fields: Prisma.bidFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bidFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bidFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload>;
          };
          findFirst: {
            args: Prisma.bidFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bidFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload>;
          };
          findMany: {
            args: Prisma.bidFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload>[];
          };
          create: {
            args: Prisma.bidCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload>;
          };
          createMany: {
            args: Prisma.bidCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bidDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload>;
          };
          update: {
            args: Prisma.bidUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload>;
          };
          deleteMany: {
            args: Prisma.bidDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bidUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bidUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bidPayload>;
          };
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBid>;
          };
          groupBy: {
            args: Prisma.bidGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BidGroupByOutputType>[];
          };
          count: {
            args: Prisma.bidCountArgs<ExtArgs>;
            result: $Utils.Optional<BidCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      freelancer: {
        payload: Prisma.$freelancerPayload<ExtArgs>;
        fields: Prisma.freelancerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.freelancerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.freelancerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          findFirst: {
            args: Prisma.freelancerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.freelancerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          findMany: {
            args: Prisma.freelancerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>[];
          };
          create: {
            args: Prisma.freelancerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          createMany: {
            args: Prisma.freelancerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.freelancerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          update: {
            args: Prisma.freelancerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          deleteMany: {
            args: Prisma.freelancerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.freelancerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.freelancerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$freelancerPayload>;
          };
          aggregate: {
            args: Prisma.FreelancerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFreelancer>;
          };
          groupBy: {
            args: Prisma.freelancerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FreelancerGroupByOutputType>[];
          };
          count: {
            args: Prisma.freelancerCountArgs<ExtArgs>;
            result: $Utils.Optional<FreelancerCountAggregateOutputType> | number;
          };
        };
      };
      project: {
        payload: Prisma.$projectPayload<ExtArgs>;
        fields: Prisma.projectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.projectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    project: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | CompanyCountOutputTypeCountProjectArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProjectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: projectWhereInput;
  };

  /**
   * Count Type FreelancerCountOutputType
   */

  export type FreelancerCountOutputType = {
    bid: number;
    project: number;
  };

  export type FreelancerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | FreelancerCountOutputTypeCountBidArgs;
    project?: boolean | FreelancerCountOutputTypeCountProjectArgs;
  };

  // Custom InputTypes

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the FreelancerCountOutputType
       */
      select?: FreelancerCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeCountBidArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bidWhereInput;
  };

  /**
   * FreelancerCountOutputType without action
   */
  export type FreelancerCountOutputTypeCountProjectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: projectWhereInput;
  };

  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    bid: number;
    review: number;
  };

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | ProjectCountOutputTypeCountBidArgs;
    review?: boolean | ProjectCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bidWhereInput;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    freelancer: number;
    review_review_reviewee_idTouser: number;
    review_review_reviewer_idTouser: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    freelancer?: boolean | UserCountOutputTypeCountFreelancerArgs;
    review_review_reviewee_idTouser?: boolean | UserCountOutputTypeCountReview_review_reviewee_idTouserArgs;
    review_review_reviewer_idTouser?: boolean | UserCountOutputTypeCountReview_review_reviewer_idTouserArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFreelancerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: freelancerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReview_review_reviewee_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReview_review_reviewer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null;
    _avg: BidAvgAggregateOutputType | null;
    _sum: BidSumAggregateOutputType | null;
    _min: BidMinAggregateOutputType | null;
    _max: BidMaxAggregateOutputType | null;
  };

  export type BidAvgAggregateOutputType = {
    amount: number | null;
  };

  export type BidSumAggregateOutputType = {
    amount: number | null;
  };

  export type BidMinAggregateOutputType = {
    id: string | null;
    freelancer_id: string | null;
    project_id: string | null;
    amount: number | null;
    proposed_completion_date: Date | null;
    message: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BidMaxAggregateOutputType = {
    id: string | null;
    freelancer_id: string | null;
    project_id: string | null;
    amount: number | null;
    proposed_completion_date: Date | null;
    message: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BidCountAggregateOutputType = {
    id: number;
    freelancer_id: number;
    project_id: number;
    amount: number;
    proposed_completion_date: number;
    message: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BidAvgAggregateInputType = {
    amount?: true;
  };

  export type BidSumAggregateInputType = {
    amount?: true;
  };

  export type BidMinAggregateInputType = {
    id?: true;
    freelancer_id?: true;
    project_id?: true;
    amount?: true;
    proposed_completion_date?: true;
    message?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BidMaxAggregateInputType = {
    id?: true;
    freelancer_id?: true;
    project_id?: true;
    amount?: true;
    proposed_completion_date?: true;
    message?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BidCountAggregateInputType = {
    id?: true;
    freelancer_id?: true;
    project_id?: true;
    amount?: true;
    proposed_completion_date?: true;
    message?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bid to aggregate.
     */
    where?: bidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bids to fetch.
     */
    orderBy?: bidOrderByWithRelationInput | bidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bids.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bids
     **/
    _count?: true | BidCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BidAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BidSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BidMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BidMaxAggregateInputType;
  };

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
    [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>;
  };

  export type bidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bidWhereInput;
    orderBy?: bidOrderByWithAggregationInput | bidOrderByWithAggregationInput[];
    by: BidScalarFieldEnum[] | BidScalarFieldEnum;
    having?: bidScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BidCountAggregateInputType | true;
    _avg?: BidAvgAggregateInputType;
    _sum?: BidSumAggregateInputType;
    _min?: BidMinAggregateInputType;
    _max?: BidMaxAggregateInputType;
  };

  export type BidGroupByOutputType = {
    id: string;
    freelancer_id: string;
    project_id: string;
    amount: number | null;
    proposed_completion_date: Date | null;
    message: string | null;
    created_at: Date;
    updated_at: Date;
    _count: BidCountAggregateOutputType | null;
    _avg: BidAvgAggregateOutputType | null;
    _sum: BidSumAggregateOutputType | null;
    _min: BidMinAggregateOutputType | null;
    _max: BidMaxAggregateOutputType | null;
  };

  type GetBidGroupByPayload<T extends bidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BidGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BidGroupByOutputType[P]>
          : GetScalarType<T[P], BidGroupByOutputType[P]>;
      }
    >
  >;

  export type bidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      freelancer_id?: boolean;
      project_id?: boolean;
      amount?: boolean;
      proposed_completion_date?: boolean;
      message?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      freelancer?: boolean | freelancerDefaultArgs<ExtArgs>;
      project?: boolean | projectDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bid']
  >;

  export type bidSelectScalar = {
    id?: boolean;
    freelancer_id?: boolean;
    project_id?: boolean;
    amount?: boolean;
    proposed_completion_date?: boolean;
    message?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    freelancer?: boolean | freelancerDefaultArgs<ExtArgs>;
    project?: boolean | projectDefaultArgs<ExtArgs>;
  };

  export type $bidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'bid';
    objects: {
      freelancer: Prisma.$freelancerPayload<ExtArgs>;
      project: Prisma.$projectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        freelancer_id: string;
        project_id: string;
        amount: number | null;
        proposed_completion_date: Date | null;
        message: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['bid']
    >;
    composites: {};
  };

  type bidGetPayload<S extends boolean | null | undefined | bidDefaultArgs> = $Result.GetResult<Prisma.$bidPayload, S>;

  type bidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bidFindManyArgs,
    'select' | 'include'
  > & {
    select?: BidCountAggregateInputType | true;
  };

  export interface bidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bid']; meta: { name: 'bid' } };
    /**
     * Find zero or one Bid that matches the filter.
     * @param {bidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bidFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bidFindUniqueArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Bid that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bidFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bidFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bidFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bidFindFirstArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bidFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bidFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     *
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bidFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bidFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Bid.
     * @param {bidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     *
     **/
    create<T extends bidCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bidCreateArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bids.
     *     @param {bidCreateManyArgs} args - Arguments to create many Bids.
     *     @example
     *     // Create many Bids
     *     const bid = await prisma.bid.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bidCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bidCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Bid.
     * @param {bidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     *
     **/
    delete<T extends bidDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bidDeleteArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Bid.
     * @param {bidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bidUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bidUpdateArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bids.
     * @param {bidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bidDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bidDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bidUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bidUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Bid.
     * @param {bidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     **/
    upsert<T extends bidUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bidUpsertArgs<ExtArgs>>,
    ): Prisma__bidClient<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
     **/
    count<T extends bidCountArgs>(
      args?: Subset<T, bidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BidAggregateArgs>(
      args: Subset<T, BidAggregateArgs>,
    ): Prisma.PrismaPromise<GetBidAggregateType<T>>;

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bidGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bidGroupByArgs['orderBy'] }
        : { orderBy?: bidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bidGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the bid model
     */
    readonly fields: bidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bidClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    freelancer<T extends freelancerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, freelancerDefaultArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project<T extends projectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, projectDefaultArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the bid model
   */
  interface bidFieldRefs {
    readonly id: FieldRef<'bid', 'String'>;
    readonly freelancer_id: FieldRef<'bid', 'String'>;
    readonly project_id: FieldRef<'bid', 'String'>;
    readonly amount: FieldRef<'bid', 'Int'>;
    readonly proposed_completion_date: FieldRef<'bid', 'DateTime'>;
    readonly message: FieldRef<'bid', 'String'>;
    readonly created_at: FieldRef<'bid', 'DateTime'>;
    readonly updated_at: FieldRef<'bid', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * bid findUnique
   */
  export type bidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * Filter, which bid to fetch.
     */
    where: bidWhereUniqueInput;
  };

  /**
   * bid findUniqueOrThrow
   */
  export type bidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * Filter, which bid to fetch.
     */
    where: bidWhereUniqueInput;
  };

  /**
   * bid findFirst
   */
  export type bidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * Filter, which bid to fetch.
     */
    where?: bidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bids to fetch.
     */
    orderBy?: bidOrderByWithRelationInput | bidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bids.
     */
    cursor?: bidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bids.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[];
  };

  /**
   * bid findFirstOrThrow
   */
  export type bidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * Filter, which bid to fetch.
     */
    where?: bidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bids to fetch.
     */
    orderBy?: bidOrderByWithRelationInput | bidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bids.
     */
    cursor?: bidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bids.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[];
  };

  /**
   * bid findMany
   */
  export type bidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * Filter, which bids to fetch.
     */
    where?: bidWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bids to fetch.
     */
    orderBy?: bidOrderByWithRelationInput | bidOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bids.
     */
    cursor?: bidWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bids from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bids.
     */
    skip?: number;
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[];
  };

  /**
   * bid create
   */
  export type bidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * The data needed to create a bid.
     */
    data: XOR<bidCreateInput, bidUncheckedCreateInput>;
  };

  /**
   * bid createMany
   */
  export type bidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bids.
     */
    data: bidCreateManyInput | bidCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * bid update
   */
  export type bidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * The data needed to update a bid.
     */
    data: XOR<bidUpdateInput, bidUncheckedUpdateInput>;
    /**
     * Choose, which bid to update.
     */
    where: bidWhereUniqueInput;
  };

  /**
   * bid updateMany
   */
  export type bidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bids.
     */
    data: XOR<bidUpdateManyMutationInput, bidUncheckedUpdateManyInput>;
    /**
     * Filter which bids to update
     */
    where?: bidWhereInput;
  };

  /**
   * bid upsert
   */
  export type bidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * The filter to search for the bid to update in case it exists.
     */
    where: bidWhereUniqueInput;
    /**
     * In case the bid found by the `where` argument doesn't exist, create a new bid with this data.
     */
    create: XOR<bidCreateInput, bidUncheckedCreateInput>;
    /**
     * In case the bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bidUpdateInput, bidUncheckedUpdateInput>;
  };

  /**
   * bid delete
   */
  export type bidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    /**
     * Filter which bid to delete.
     */
    where: bidWhereUniqueInput;
  };

  /**
   * bid deleteMany
   */
  export type bidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bids to delete
     */
    where?: bidWhereInput;
  };

  /**
   * bid without action
   */
  export type bidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    website: string | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    website: string | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    website: number;
    industry: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    website?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    website?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    website?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    website: string | null;
    industry: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      website?: boolean;
      industry?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      project?: boolean | company$projectArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    website?: boolean;
    industry?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    project?: boolean | company$projectArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      project: Prisma.$projectPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        website: string | null;
        industry: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project<T extends company$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, company$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly website: FieldRef<'company', 'String'>;
    readonly industry: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.project
   */
  export type company$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model freelancer
   */

  export type AggregateFreelancer = {
    _count: FreelancerCountAggregateOutputType | null;
    _avg: FreelancerAvgAggregateOutputType | null;
    _sum: FreelancerSumAggregateOutputType | null;
    _min: FreelancerMinAggregateOutputType | null;
    _max: FreelancerMaxAggregateOutputType | null;
  };

  export type FreelancerAvgAggregateOutputType = {
    experience: number | null;
    hourly_rate: number | null;
  };

  export type FreelancerSumAggregateOutputType = {
    experience: number | null;
    hourly_rate: number | null;
  };

  export type FreelancerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    skills: string | null;
    experience: number | null;
    portfolio_url: string | null;
    hourly_rate: number | null;
    availability: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FreelancerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    skills: string | null;
    experience: number | null;
    portfolio_url: string | null;
    hourly_rate: number | null;
    availability: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type FreelancerCountAggregateOutputType = {
    id: number;
    user_id: number;
    skills: number;
    experience: number;
    portfolio_url: number;
    hourly_rate: number;
    availability: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type FreelancerAvgAggregateInputType = {
    experience?: true;
    hourly_rate?: true;
  };

  export type FreelancerSumAggregateInputType = {
    experience?: true;
    hourly_rate?: true;
  };

  export type FreelancerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    skills?: true;
    experience?: true;
    portfolio_url?: true;
    hourly_rate?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FreelancerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    skills?: true;
    experience?: true;
    portfolio_url?: true;
    hourly_rate?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type FreelancerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    skills?: true;
    experience?: true;
    portfolio_url?: true;
    hourly_rate?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type FreelancerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelancer to aggregate.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned freelancers
     **/
    _count?: true | FreelancerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FreelancerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FreelancerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FreelancerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FreelancerMaxAggregateInputType;
  };

  export type GetFreelancerAggregateType<T extends FreelancerAggregateArgs> = {
    [P in keyof T & keyof AggregateFreelancer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelancer[P]>
      : GetScalarType<T[P], AggregateFreelancer[P]>;
  };

  export type freelancerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freelancerWhereInput;
    orderBy?: freelancerOrderByWithAggregationInput | freelancerOrderByWithAggregationInput[];
    by: FreelancerScalarFieldEnum[] | FreelancerScalarFieldEnum;
    having?: freelancerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FreelancerCountAggregateInputType | true;
    _avg?: FreelancerAvgAggregateInputType;
    _sum?: FreelancerSumAggregateInputType;
    _min?: FreelancerMinAggregateInputType;
    _max?: FreelancerMaxAggregateInputType;
  };

  export type FreelancerGroupByOutputType = {
    id: string;
    user_id: string;
    skills: string | null;
    experience: number | null;
    portfolio_url: string | null;
    hourly_rate: number | null;
    availability: string | null;
    created_at: Date;
    updated_at: Date;
    _count: FreelancerCountAggregateOutputType | null;
    _avg: FreelancerAvgAggregateOutputType | null;
    _sum: FreelancerSumAggregateOutputType | null;
    _min: FreelancerMinAggregateOutputType | null;
    _max: FreelancerMaxAggregateOutputType | null;
  };

  type GetFreelancerGroupByPayload<T extends freelancerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreelancerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FreelancerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FreelancerGroupByOutputType[P]>
          : GetScalarType<T[P], FreelancerGroupByOutputType[P]>;
      }
    >
  >;

  export type freelancerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        skills?: boolean;
        experience?: boolean;
        portfolio_url?: boolean;
        hourly_rate?: boolean;
        availability?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        bid?: boolean | freelancer$bidArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        project?: boolean | freelancer$projectArgs<ExtArgs>;
        _count?: boolean | FreelancerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['freelancer']
    >;

  export type freelancerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    skills?: boolean;
    experience?: boolean;
    portfolio_url?: boolean;
    hourly_rate?: boolean;
    availability?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type freelancerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | freelancer$bidArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    project?: boolean | freelancer$projectArgs<ExtArgs>;
    _count?: boolean | FreelancerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $freelancerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'freelancer';
    objects: {
      bid: Prisma.$bidPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      project: Prisma.$projectPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        skills: string | null;
        experience: number | null;
        portfolio_url: string | null;
        hourly_rate: number | null;
        availability: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['freelancer']
    >;
    composites: {};
  };

  type freelancerGetPayload<S extends boolean | null | undefined | freelancerDefaultArgs> = $Result.GetResult<
    Prisma.$freelancerPayload,
    S
  >;

  type freelancerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    freelancerFindManyArgs,
    'select' | 'include'
  > & {
    select?: FreelancerCountAggregateInputType | true;
  };

  export interface freelancerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['freelancer']; meta: { name: 'freelancer' } };
    /**
     * Find zero or one Freelancer that matches the filter.
     * @param {freelancerFindUniqueArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends freelancerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerFindUniqueArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Freelancer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {freelancerFindUniqueOrThrowArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends freelancerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Freelancer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindFirstArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends freelancerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindFirstArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Freelancer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindFirstOrThrowArgs} args - Arguments to find a Freelancer
     * @example
     * // Get one Freelancer
     * const freelancer = await prisma.freelancer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends freelancerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Freelancers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freelancers
     * const freelancers = await prisma.freelancer.findMany()
     *
     * // Get first 10 Freelancers
     * const freelancers = await prisma.freelancer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const freelancerWithIdOnly = await prisma.freelancer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends freelancerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Freelancer.
     * @param {freelancerCreateArgs} args - Arguments to create a Freelancer.
     * @example
     * // Create one Freelancer
     * const Freelancer = await prisma.freelancer.create({
     *   data: {
     *     // ... data to create a Freelancer
     *   }
     * })
     *
     **/
    create<T extends freelancerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerCreateArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Freelancers.
     *     @param {freelancerCreateManyArgs} args - Arguments to create many Freelancers.
     *     @example
     *     // Create many Freelancers
     *     const freelancer = await prisma.freelancer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends freelancerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Freelancer.
     * @param {freelancerDeleteArgs} args - Arguments to delete one Freelancer.
     * @example
     * // Delete one Freelancer
     * const Freelancer = await prisma.freelancer.delete({
     *   where: {
     *     // ... filter to delete one Freelancer
     *   }
     * })
     *
     **/
    delete<T extends freelancerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerDeleteArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Freelancer.
     * @param {freelancerUpdateArgs} args - Arguments to update one Freelancer.
     * @example
     * // Update one Freelancer
     * const freelancer = await prisma.freelancer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends freelancerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerUpdateArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Freelancers.
     * @param {freelancerDeleteManyArgs} args - Arguments to filter Freelancers to delete.
     * @example
     * // Delete a few Freelancers
     * const { count } = await prisma.freelancer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends freelancerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, freelancerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Freelancers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freelancers
     * const freelancer = await prisma.freelancer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends freelancerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Freelancer.
     * @param {freelancerUpsertArgs} args - Arguments to update or create a Freelancer.
     * @example
     * // Update or create a Freelancer
     * const freelancer = await prisma.freelancer.upsert({
     *   create: {
     *     // ... data to create a Freelancer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freelancer we want to update
     *   }
     * })
     **/
    upsert<T extends freelancerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, freelancerUpsertArgs<ExtArgs>>,
    ): Prisma__freelancerClient<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Freelancers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerCountArgs} args - Arguments to filter Freelancers to count.
     * @example
     * // Count the number of Freelancers
     * const count = await prisma.freelancer.count({
     *   where: {
     *     // ... the filter for the Freelancers we want to count
     *   }
     * })
     **/
    count<T extends freelancerCountArgs>(
      args?: Subset<T, freelancerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreelancerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Freelancer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreelancerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FreelancerAggregateArgs>(
      args: Subset<T, FreelancerAggregateArgs>,
    ): Prisma.PrismaPromise<GetFreelancerAggregateType<T>>;

    /**
     * Group by Freelancer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelancerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends freelancerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: freelancerGroupByArgs['orderBy'] }
        : { orderBy?: freelancerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, freelancerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFreelancerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the freelancer model
     */
    readonly fields: freelancerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for freelancer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__freelancerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bid<T extends freelancer$bidArgs<ExtArgs> = {}>(
      args?: Subset<T, freelancer$bidArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project<T extends freelancer$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, freelancer$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the freelancer model
   */
  interface freelancerFieldRefs {
    readonly id: FieldRef<'freelancer', 'String'>;
    readonly user_id: FieldRef<'freelancer', 'String'>;
    readonly skills: FieldRef<'freelancer', 'String'>;
    readonly experience: FieldRef<'freelancer', 'Int'>;
    readonly portfolio_url: FieldRef<'freelancer', 'String'>;
    readonly hourly_rate: FieldRef<'freelancer', 'Int'>;
    readonly availability: FieldRef<'freelancer', 'String'>;
    readonly created_at: FieldRef<'freelancer', 'DateTime'>;
    readonly updated_at: FieldRef<'freelancer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * freelancer findUnique
   */
  export type freelancerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer findUniqueOrThrow
   */
  export type freelancerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer findFirst
   */
  export type freelancerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for freelancers.
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of freelancers.
     */
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * freelancer findFirstOrThrow
   */
  export type freelancerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancer to fetch.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for freelancers.
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of freelancers.
     */
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * freelancer findMany
   */
  export type freelancerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter, which freelancers to fetch.
     */
    where?: freelancerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of freelancers to fetch.
     */
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing freelancers.
     */
    cursor?: freelancerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` freelancers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` freelancers.
     */
    skip?: number;
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * freelancer create
   */
  export type freelancerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * The data needed to create a freelancer.
     */
    data: XOR<freelancerCreateInput, freelancerUncheckedCreateInput>;
  };

  /**
   * freelancer createMany
   */
  export type freelancerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many freelancers.
     */
    data: freelancerCreateManyInput | freelancerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * freelancer update
   */
  export type freelancerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * The data needed to update a freelancer.
     */
    data: XOR<freelancerUpdateInput, freelancerUncheckedUpdateInput>;
    /**
     * Choose, which freelancer to update.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer updateMany
   */
  export type freelancerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update freelancers.
     */
    data: XOR<freelancerUpdateManyMutationInput, freelancerUncheckedUpdateManyInput>;
    /**
     * Filter which freelancers to update
     */
    where?: freelancerWhereInput;
  };

  /**
   * freelancer upsert
   */
  export type freelancerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * The filter to search for the freelancer to update in case it exists.
     */
    where: freelancerWhereUniqueInput;
    /**
     * In case the freelancer found by the `where` argument doesn't exist, create a new freelancer with this data.
     */
    create: XOR<freelancerCreateInput, freelancerUncheckedCreateInput>;
    /**
     * In case the freelancer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<freelancerUpdateInput, freelancerUncheckedUpdateInput>;
  };

  /**
   * freelancer delete
   */
  export type freelancerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    /**
     * Filter which freelancer to delete.
     */
    where: freelancerWhereUniqueInput;
  };

  /**
   * freelancer deleteMany
   */
  export type freelancerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelancers to delete
     */
    where?: freelancerWhereInput;
  };

  /**
   * freelancer.bid
   */
  export type freelancer$bidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    where?: bidWhereInput;
    orderBy?: bidOrderByWithRelationInput | bidOrderByWithRelationInput[];
    cursor?: bidWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[];
  };

  /**
   * freelancer.project
   */
  export type freelancer$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * freelancer without action
   */
  export type freelancerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
  };

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectAvgAggregateOutputType = {
    budget: number | null;
  };

  export type ProjectSumAggregateOutputType = {
    budget: number | null;
  };

  export type ProjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    deadline: Date | null;
    company_id: string | null;
    freelancer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    deadline: Date | null;
    company_id: string | null;
    freelancer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    budget: number;
    deadline: number;
    company_id: number;
    freelancer_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProjectAvgAggregateInputType = {
    budget?: true;
  };

  export type ProjectSumAggregateInputType = {
    budget?: true;
  };

  export type ProjectMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    budget?: true;
    deadline?: true;
    company_id?: true;
    freelancer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    budget?: true;
    deadline?: true;
    company_id?: true;
    freelancer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    budget?: true;
    deadline?: true;
    company_id?: true;
    freelancer_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProjectAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProjectSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput;
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: projectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _avg?: ProjectAvgAggregateInputType;
    _sum?: ProjectSumAggregateInputType;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    budget: number | null;
    deadline: Date | null;
    company_id: string;
    freelancer_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ProjectCountAggregateOutputType | null;
    _avg: ProjectAvgAggregateOutputType | null;
    _sum: ProjectSumAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProjectGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
          : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
      }
    >
  >;

  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      budget?: boolean;
      deadline?: boolean;
      company_id?: boolean;
      freelancer_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      bid?: boolean | project$bidArgs<ExtArgs>;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      freelancer?: boolean | freelancerDefaultArgs<ExtArgs>;
      review?: boolean | project$reviewArgs<ExtArgs>;
      _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['project']
  >;

  export type projectSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    budget?: boolean;
    deadline?: boolean;
    company_id?: boolean;
    freelancer_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | project$bidArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    freelancer?: boolean | freelancerDefaultArgs<ExtArgs>;
    review?: boolean | project$reviewArgs<ExtArgs>;
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'project';
    objects: {
      bid: Prisma.$bidPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
      freelancer: Prisma.$freelancerPayload<ExtArgs>;
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        budget: number | null;
        deadline: Date | null;
        company_id: string;
        freelancer_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['project']
    >;
    composites: {};
  };

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<
    Prisma.$projectPayload,
    S
  >;

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    projectFindManyArgs,
    'select' | 'include'
  > & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project']; meta: { name: 'project' } };
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends projectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends projectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends projectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     **/
    create<T extends projectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Projects.
     *     @param {projectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends projectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     **/
    delete<T extends projectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends projectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends projectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends projectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     **/
    upsert<T extends projectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the project model
     */
    readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bid<T extends project$bidArgs<ExtArgs> = {}>(
      args?: Subset<T, project$bidArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bidPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    freelancer<T extends freelancerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, freelancerDefaultArgs<ExtArgs>>,
    ): Prisma__freelancerClient<
      $Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    review<T extends project$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, project$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<'project', 'String'>;
    readonly name: FieldRef<'project', 'String'>;
    readonly description: FieldRef<'project', 'String'>;
    readonly budget: FieldRef<'project', 'Int'>;
    readonly deadline: FieldRef<'project', 'DateTime'>;
    readonly company_id: FieldRef<'project', 'String'>;
    readonly freelancer_id: FieldRef<'project', 'String'>;
    readonly created_at: FieldRef<'project', 'DateTime'>;
    readonly updated_at: FieldRef<'project', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>;
  };

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>;
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput;
  };

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput;
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>;
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
  };

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput;
  };

  /**
   * project.bid
   */
  export type project$bidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bid
     */
    select?: bidSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bidInclude<ExtArgs> | null;
    where?: bidWhereInput;
    orderBy?: bidOrderByWithRelationInput | bidOrderByWithRelationInput[];
    cursor?: bidWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[];
  };

  /**
   * project.review
   */
  export type project$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    rating: number | null;
    feedback: string | null;
    project_id: string | null;
    reviewer_id: string | null;
    reviewee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    rating: number | null;
    feedback: string | null;
    project_id: string | null;
    reviewer_id: string | null;
    reviewee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    rating: number;
    feedback: number;
    project_id: number;
    reviewer_id: number;
    reviewee_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    rating?: true;
    feedback?: true;
    project_id?: true;
    reviewer_id?: true;
    reviewee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    rating?: true;
    feedback?: true;
    project_id?: true;
    reviewer_id?: true;
    reviewee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    rating?: true;
    feedback?: true;
    project_id?: true;
    reviewer_id?: true;
    reviewee_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    rating: number | null;
    feedback: string | null;
    project_id: string;
    reviewer_id: string;
    reviewee_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      feedback?: boolean;
      project_id?: boolean;
      reviewer_id?: boolean;
      reviewee_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      project?: boolean | projectDefaultArgs<ExtArgs>;
      user_review_reviewee_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      user_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    rating?: boolean;
    feedback?: boolean;
    project_id?: boolean;
    reviewer_id?: boolean;
    reviewee_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>;
    user_review_reviewee_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      project: Prisma.$projectPayload<ExtArgs>;
      user_review_reviewee_idTouser: Prisma.$userPayload<ExtArgs>;
      user_review_reviewer_idTouser: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rating: number | null;
        feedback: string | null;
        project_id: string;
        reviewer_id: string;
        reviewee_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends projectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, projectDefaultArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_review_reviewee_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_review_reviewer_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly feedback: FieldRef<'review', 'String'>;
    readonly project_id: FieldRef<'review', 'String'>;
    readonly reviewer_id: FieldRef<'review', 'String'>;
    readonly reviewee_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      freelancer?: boolean | user$freelancerArgs<ExtArgs>;
      review_review_reviewee_idTouser?: boolean | user$review_review_reviewee_idTouserArgs<ExtArgs>;
      review_review_reviewer_idTouser?: boolean | user$review_review_reviewer_idTouserArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    freelancer?: boolean | user$freelancerArgs<ExtArgs>;
    review_review_reviewee_idTouser?: boolean | user$review_review_reviewee_idTouserArgs<ExtArgs>;
    review_review_reviewer_idTouser?: boolean | user$review_review_reviewer_idTouserArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      freelancer: Prisma.$freelancerPayload<ExtArgs>[];
      review_review_reviewee_idTouser: Prisma.$reviewPayload<ExtArgs>[];
      review_review_reviewer_idTouser: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    freelancer<T extends user$freelancerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$freelancerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelancerPayload<ExtArgs>, T, 'findMany'> | Null>;

    review_review_reviewee_idTouser<T extends user$review_review_reviewee_idTouserArgs<ExtArgs> = {}>(
      args?: Subset<T, user$review_review_reviewee_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    review_review_reviewer_idTouser<T extends user$review_review_reviewer_idTouserArgs<ExtArgs> = {}>(
      args?: Subset<T, user$review_review_reviewer_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.freelancer
   */
  export type user$freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelancer
     */
    select?: freelancerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: freelancerInclude<ExtArgs> | null;
    where?: freelancerWhereInput;
    orderBy?: freelancerOrderByWithRelationInput | freelancerOrderByWithRelationInput[];
    cursor?: freelancerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FreelancerScalarFieldEnum | FreelancerScalarFieldEnum[];
  };

  /**
   * user.review_review_reviewee_idTouser
   */
  export type user$review_review_reviewee_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user.review_review_reviewer_idTouser
   */
  export type user$review_review_reviewer_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BidScalarFieldEnum: {
    id: 'id';
    freelancer_id: 'freelancer_id';
    project_id: 'project_id';
    amount: 'amount';
    proposed_completion_date: 'proposed_completion_date';
    message: 'message';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    website: 'website';
    industry: 'industry';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const FreelancerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    skills: 'skills';
    experience: 'experience';
    portfolio_url: 'portfolio_url';
    hourly_rate: 'hourly_rate';
    availability: 'availability';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type FreelancerScalarFieldEnum = (typeof FreelancerScalarFieldEnum)[keyof typeof FreelancerScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    budget: 'budget';
    deadline: 'deadline';
    company_id: 'company_id';
    freelancer_id: 'freelancer_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    rating: 'rating';
    feedback: 'feedback';
    project_id: 'project_id';
    reviewer_id: 'reviewer_id';
    reviewee_id: 'reviewee_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bidWhereInput = {
    AND?: bidWhereInput | bidWhereInput[];
    OR?: bidWhereInput[];
    NOT?: bidWhereInput | bidWhereInput[];
    id?: UuidFilter<'bid'> | string;
    freelancer_id?: UuidFilter<'bid'> | string;
    project_id?: UuidFilter<'bid'> | string;
    amount?: IntNullableFilter<'bid'> | number | null;
    proposed_completion_date?: DateTimeNullableFilter<'bid'> | Date | string | null;
    message?: StringNullableFilter<'bid'> | string | null;
    created_at?: DateTimeFilter<'bid'> | Date | string;
    updated_at?: DateTimeFilter<'bid'> | Date | string;
    freelancer?: XOR<FreelancerRelationFilter, freelancerWhereInput>;
    project?: XOR<ProjectRelationFilter, projectWhereInput>;
  };

  export type bidOrderByWithRelationInput = {
    id?: SortOrder;
    freelancer_id?: SortOrder;
    project_id?: SortOrder;
    amount?: SortOrderInput | SortOrder;
    proposed_completion_date?: SortOrderInput | SortOrder;
    message?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    freelancer?: freelancerOrderByWithRelationInput;
    project?: projectOrderByWithRelationInput;
  };

  export type bidWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bidWhereInput | bidWhereInput[];
      OR?: bidWhereInput[];
      NOT?: bidWhereInput | bidWhereInput[];
      freelancer_id?: UuidFilter<'bid'> | string;
      project_id?: UuidFilter<'bid'> | string;
      amount?: IntNullableFilter<'bid'> | number | null;
      proposed_completion_date?: DateTimeNullableFilter<'bid'> | Date | string | null;
      message?: StringNullableFilter<'bid'> | string | null;
      created_at?: DateTimeFilter<'bid'> | Date | string;
      updated_at?: DateTimeFilter<'bid'> | Date | string;
      freelancer?: XOR<FreelancerRelationFilter, freelancerWhereInput>;
      project?: XOR<ProjectRelationFilter, projectWhereInput>;
    },
    'id'
  >;

  export type bidOrderByWithAggregationInput = {
    id?: SortOrder;
    freelancer_id?: SortOrder;
    project_id?: SortOrder;
    amount?: SortOrderInput | SortOrder;
    proposed_completion_date?: SortOrderInput | SortOrder;
    message?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bidCountOrderByAggregateInput;
    _avg?: bidAvgOrderByAggregateInput;
    _max?: bidMaxOrderByAggregateInput;
    _min?: bidMinOrderByAggregateInput;
    _sum?: bidSumOrderByAggregateInput;
  };

  export type bidScalarWhereWithAggregatesInput = {
    AND?: bidScalarWhereWithAggregatesInput | bidScalarWhereWithAggregatesInput[];
    OR?: bidScalarWhereWithAggregatesInput[];
    NOT?: bidScalarWhereWithAggregatesInput | bidScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'bid'> | string;
    freelancer_id?: UuidWithAggregatesFilter<'bid'> | string;
    project_id?: UuidWithAggregatesFilter<'bid'> | string;
    amount?: IntNullableWithAggregatesFilter<'bid'> | number | null;
    proposed_completion_date?: DateTimeNullableWithAggregatesFilter<'bid'> | Date | string | null;
    message?: StringNullableWithAggregatesFilter<'bid'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'bid'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'bid'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    website?: StringNullableFilter<'company'> | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    project?: ProjectListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    project?: projectOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      website?: StringNullableFilter<'company'> | string | null;
      industry?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      project?: ProjectListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    website?: StringNullableWithAggregatesFilter<'company'> | string | null;
    industry?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type freelancerWhereInput = {
    AND?: freelancerWhereInput | freelancerWhereInput[];
    OR?: freelancerWhereInput[];
    NOT?: freelancerWhereInput | freelancerWhereInput[];
    id?: UuidFilter<'freelancer'> | string;
    user_id?: UuidFilter<'freelancer'> | string;
    skills?: StringNullableFilter<'freelancer'> | string | null;
    experience?: IntNullableFilter<'freelancer'> | number | null;
    portfolio_url?: StringNullableFilter<'freelancer'> | string | null;
    hourly_rate?: IntNullableFilter<'freelancer'> | number | null;
    availability?: StringNullableFilter<'freelancer'> | string | null;
    created_at?: DateTimeFilter<'freelancer'> | Date | string;
    updated_at?: DateTimeFilter<'freelancer'> | Date | string;
    bid?: BidListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    project?: ProjectListRelationFilter;
  };

  export type freelancerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    skills?: SortOrderInput | SortOrder;
    experience?: SortOrderInput | SortOrder;
    portfolio_url?: SortOrderInput | SortOrder;
    hourly_rate?: SortOrderInput | SortOrder;
    availability?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    bid?: bidOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    project?: projectOrderByRelationAggregateInput;
  };

  export type freelancerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: freelancerWhereInput | freelancerWhereInput[];
      OR?: freelancerWhereInput[];
      NOT?: freelancerWhereInput | freelancerWhereInput[];
      user_id?: UuidFilter<'freelancer'> | string;
      skills?: StringNullableFilter<'freelancer'> | string | null;
      experience?: IntNullableFilter<'freelancer'> | number | null;
      portfolio_url?: StringNullableFilter<'freelancer'> | string | null;
      hourly_rate?: IntNullableFilter<'freelancer'> | number | null;
      availability?: StringNullableFilter<'freelancer'> | string | null;
      created_at?: DateTimeFilter<'freelancer'> | Date | string;
      updated_at?: DateTimeFilter<'freelancer'> | Date | string;
      bid?: BidListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      project?: ProjectListRelationFilter;
    },
    'id'
  >;

  export type freelancerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    skills?: SortOrderInput | SortOrder;
    experience?: SortOrderInput | SortOrder;
    portfolio_url?: SortOrderInput | SortOrder;
    hourly_rate?: SortOrderInput | SortOrder;
    availability?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: freelancerCountOrderByAggregateInput;
    _avg?: freelancerAvgOrderByAggregateInput;
    _max?: freelancerMaxOrderByAggregateInput;
    _min?: freelancerMinOrderByAggregateInput;
    _sum?: freelancerSumOrderByAggregateInput;
  };

  export type freelancerScalarWhereWithAggregatesInput = {
    AND?: freelancerScalarWhereWithAggregatesInput | freelancerScalarWhereWithAggregatesInput[];
    OR?: freelancerScalarWhereWithAggregatesInput[];
    NOT?: freelancerScalarWhereWithAggregatesInput | freelancerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'freelancer'> | string;
    user_id?: UuidWithAggregatesFilter<'freelancer'> | string;
    skills?: StringNullableWithAggregatesFilter<'freelancer'> | string | null;
    experience?: IntNullableWithAggregatesFilter<'freelancer'> | number | null;
    portfolio_url?: StringNullableWithAggregatesFilter<'freelancer'> | string | null;
    hourly_rate?: IntNullableWithAggregatesFilter<'freelancer'> | number | null;
    availability?: StringNullableWithAggregatesFilter<'freelancer'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'freelancer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'freelancer'> | Date | string;
  };

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[];
    OR?: projectWhereInput[];
    NOT?: projectWhereInput | projectWhereInput[];
    id?: UuidFilter<'project'> | string;
    name?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    budget?: IntNullableFilter<'project'> | number | null;
    deadline?: DateTimeNullableFilter<'project'> | Date | string | null;
    company_id?: UuidFilter<'project'> | string;
    freelancer_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
    bid?: BidListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    freelancer?: XOR<FreelancerRelationFilter, freelancerWhereInput>;
    review?: ReviewListRelationFilter;
  };

  export type projectOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    budget?: SortOrderInput | SortOrder;
    deadline?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    bid?: bidOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
    freelancer?: freelancerOrderByWithRelationInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type projectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: projectWhereInput | projectWhereInput[];
      OR?: projectWhereInput[];
      NOT?: projectWhereInput | projectWhereInput[];
      name?: StringFilter<'project'> | string;
      description?: StringNullableFilter<'project'> | string | null;
      budget?: IntNullableFilter<'project'> | number | null;
      deadline?: DateTimeNullableFilter<'project'> | Date | string | null;
      company_id?: UuidFilter<'project'> | string;
      freelancer_id?: UuidFilter<'project'> | string;
      created_at?: DateTimeFilter<'project'> | Date | string;
      updated_at?: DateTimeFilter<'project'> | Date | string;
      bid?: BidListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      freelancer?: XOR<FreelancerRelationFilter, freelancerWhereInput>;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    budget?: SortOrderInput | SortOrder;
    deadline?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: projectCountOrderByAggregateInput;
    _avg?: projectAvgOrderByAggregateInput;
    _max?: projectMaxOrderByAggregateInput;
    _min?: projectMinOrderByAggregateInput;
    _sum?: projectSumOrderByAggregateInput;
  };

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    OR?: projectScalarWhereWithAggregatesInput[];
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'project'> | string;
    name?: StringWithAggregatesFilter<'project'> | string;
    description?: StringNullableWithAggregatesFilter<'project'> | string | null;
    budget?: IntNullableWithAggregatesFilter<'project'> | number | null;
    deadline?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    company_id?: UuidWithAggregatesFilter<'project'> | string;
    freelancer_id?: UuidWithAggregatesFilter<'project'> | string;
    created_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntNullableFilter<'review'> | number | null;
    feedback?: StringNullableFilter<'review'> | string | null;
    project_id?: UuidFilter<'review'> | string;
    reviewer_id?: UuidFilter<'review'> | string;
    reviewee_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    project?: XOR<ProjectRelationFilter, projectWhereInput>;
    user_review_reviewee_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_review_reviewer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    feedback?: SortOrderInput | SortOrder;
    project_id?: SortOrder;
    reviewer_id?: SortOrder;
    reviewee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    project?: projectOrderByWithRelationInput;
    user_review_reviewee_idTouser?: userOrderByWithRelationInput;
    user_review_reviewer_idTouser?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      rating?: IntNullableFilter<'review'> | number | null;
      feedback?: StringNullableFilter<'review'> | string | null;
      project_id?: UuidFilter<'review'> | string;
      reviewer_id?: UuidFilter<'review'> | string;
      reviewee_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      project?: XOR<ProjectRelationFilter, projectWhereInput>;
      user_review_reviewee_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_review_reviewer_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    feedback?: SortOrderInput | SortOrder;
    project_id?: SortOrder;
    reviewer_id?: SortOrder;
    reviewee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    rating?: IntNullableWithAggregatesFilter<'review'> | number | null;
    feedback?: StringNullableWithAggregatesFilter<'review'> | string | null;
    project_id?: UuidWithAggregatesFilter<'review'> | string;
    reviewer_id?: UuidWithAggregatesFilter<'review'> | string;
    reviewee_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    freelancer?: FreelancerListRelationFilter;
    review_review_reviewee_idTouser?: ReviewListRelationFilter;
    review_review_reviewer_idTouser?: ReviewListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    freelancer?: freelancerOrderByRelationAggregateInput;
    review_review_reviewee_idTouser?: reviewOrderByRelationAggregateInput;
    review_review_reviewer_idTouser?: reviewOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      freelancer?: FreelancerListRelationFilter;
      review_review_reviewee_idTouser?: ReviewListRelationFilter;
      review_review_reviewer_idTouser?: ReviewListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type bidCreateInput = {
    id?: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    freelancer: freelancerCreateNestedOneWithoutBidInput;
    project: projectCreateNestedOneWithoutBidInput;
  };

  export type bidUncheckedCreateInput = {
    id?: string;
    freelancer_id: string;
    project_id: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    freelancer?: freelancerUpdateOneRequiredWithoutBidNestedInput;
    project?: projectUpdateOneRequiredWithoutBidNestedInput;
  };

  export type bidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bidCreateManyInput = {
    id?: string;
    freelancer_id: string;
    project_id: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    project?: projectCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    project?: projectUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    project?: projectUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type freelancerCreateInput = {
    id?: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidCreateNestedManyWithoutFreelancerInput;
    user: userCreateNestedOneWithoutFreelancerInput;
    project?: projectCreateNestedManyWithoutFreelancerInput;
  };

  export type freelancerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidUncheckedCreateNestedManyWithoutFreelancerInput;
    project?: projectUncheckedCreateNestedManyWithoutFreelancerInput;
  };

  export type freelancerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUpdateManyWithoutFreelancerNestedInput;
    user?: userUpdateOneRequiredWithoutFreelancerNestedInput;
    project?: projectUpdateManyWithoutFreelancerNestedInput;
  };

  export type freelancerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUncheckedUpdateManyWithoutFreelancerNestedInput;
    project?: projectUncheckedUpdateManyWithoutFreelancerNestedInput;
  };

  export type freelancerCreateManyInput = {
    id?: string;
    user_id: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type freelancerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type freelancerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidCreateNestedManyWithoutProjectInput;
    company: companyCreateNestedOneWithoutProjectInput;
    freelancer: freelancerCreateNestedOneWithoutProjectInput;
    review?: reviewCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    company_id: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidUncheckedCreateNestedManyWithoutProjectInput;
    review?: reviewUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUpdateManyWithoutProjectNestedInput;
    company?: companyUpdateOneRequiredWithoutProjectNestedInput;
    freelancer?: freelancerUpdateOneRequiredWithoutProjectNestedInput;
    review?: reviewUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUncheckedUpdateManyWithoutProjectNestedInput;
    review?: reviewUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    company_id: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project: projectCreateNestedOneWithoutReviewInput;
    user_review_reviewee_idTouser: userCreateNestedOneWithoutReview_review_reviewee_idTouserInput;
    user_review_reviewer_idTouser: userCreateNestedOneWithoutReview_review_reviewer_idTouserInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    project_id: string;
    reviewer_id: string;
    reviewee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateOneRequiredWithoutReviewNestedInput;
    user_review_reviewee_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput;
    user_review_reviewer_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    reviewee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    project_id: string;
    reviewer_id: string;
    reviewee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    reviewee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type FreelancerRelationFilter = {
    is?: freelancerWhereInput;
    isNot?: freelancerWhereInput;
  };

  export type ProjectRelationFilter = {
    is?: projectWhereInput;
    isNot?: projectWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type bidCountOrderByAggregateInput = {
    id?: SortOrder;
    freelancer_id?: SortOrder;
    project_id?: SortOrder;
    amount?: SortOrder;
    proposed_completion_date?: SortOrder;
    message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bidAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type bidMaxOrderByAggregateInput = {
    id?: SortOrder;
    freelancer_id?: SortOrder;
    project_id?: SortOrder;
    amount?: SortOrder;
    proposed_completion_date?: SortOrder;
    message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bidMinOrderByAggregateInput = {
    id?: SortOrder;
    freelancer_id?: SortOrder;
    project_id?: SortOrder;
    amount?: SortOrder;
    proposed_completion_date?: SortOrder;
    message?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bidSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type ProjectListRelationFilter = {
    every?: projectWhereInput;
    some?: projectWhereInput;
    none?: projectWhereInput;
  };

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    website?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    website?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    website?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BidListRelationFilter = {
    every?: bidWhereInput;
    some?: bidWhereInput;
    none?: bidWhereInput;
  };

  export type bidOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type freelancerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    skills?: SortOrder;
    experience?: SortOrder;
    portfolio_url?: SortOrder;
    hourly_rate?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelancerAvgOrderByAggregateInput = {
    experience?: SortOrder;
    hourly_rate?: SortOrder;
  };

  export type freelancerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    skills?: SortOrder;
    experience?: SortOrder;
    portfolio_url?: SortOrder;
    hourly_rate?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelancerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    skills?: SortOrder;
    experience?: SortOrder;
    portfolio_url?: SortOrder;
    hourly_rate?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelancerSumOrderByAggregateInput = {
    experience?: SortOrder;
    hourly_rate?: SortOrder;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    budget?: SortOrder;
    deadline?: SortOrder;
    company_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectAvgOrderByAggregateInput = {
    budget?: SortOrder;
  };

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    budget?: SortOrder;
    deadline?: SortOrder;
    company_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    budget?: SortOrder;
    deadline?: SortOrder;
    company_id?: SortOrder;
    freelancer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectSumOrderByAggregateInput = {
    budget?: SortOrder;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    feedback?: SortOrder;
    project_id?: SortOrder;
    reviewer_id?: SortOrder;
    reviewee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    feedback?: SortOrder;
    project_id?: SortOrder;
    reviewer_id?: SortOrder;
    reviewee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    feedback?: SortOrder;
    project_id?: SortOrder;
    reviewer_id?: SortOrder;
    reviewee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type FreelancerListRelationFilter = {
    every?: freelancerWhereInput;
    some?: freelancerWhereInput;
    none?: freelancerWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type freelancerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type freelancerCreateNestedOneWithoutBidInput = {
    create?: XOR<freelancerCreateWithoutBidInput, freelancerUncheckedCreateWithoutBidInput>;
    connectOrCreate?: freelancerCreateOrConnectWithoutBidInput;
    connect?: freelancerWhereUniqueInput;
  };

  export type projectCreateNestedOneWithoutBidInput = {
    create?: XOR<projectCreateWithoutBidInput, projectUncheckedCreateWithoutBidInput>;
    connectOrCreate?: projectCreateOrConnectWithoutBidInput;
    connect?: projectWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type freelancerUpdateOneRequiredWithoutBidNestedInput = {
    create?: XOR<freelancerCreateWithoutBidInput, freelancerUncheckedCreateWithoutBidInput>;
    connectOrCreate?: freelancerCreateOrConnectWithoutBidInput;
    upsert?: freelancerUpsertWithoutBidInput;
    connect?: freelancerWhereUniqueInput;
    update?: XOR<
      XOR<freelancerUpdateToOneWithWhereWithoutBidInput, freelancerUpdateWithoutBidInput>,
      freelancerUncheckedUpdateWithoutBidInput
    >;
  };

  export type projectUpdateOneRequiredWithoutBidNestedInput = {
    create?: XOR<projectCreateWithoutBidInput, projectUncheckedCreateWithoutBidInput>;
    connectOrCreate?: projectCreateOrConnectWithoutBidInput;
    upsert?: projectUpsertWithoutBidInput;
    connect?: projectWhereUniqueInput;
    update?: XOR<
      XOR<projectUpdateToOneWithWhereWithoutBidInput, projectUpdateWithoutBidInput>,
      projectUncheckedUpdateWithoutBidInput
    >;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type projectCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type projectUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutCompanyInput | projectUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutCompanyInput | projectUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: projectUpdateManyWithWhereWithoutCompanyInput | projectUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>
      | projectCreateWithoutCompanyInput[]
      | projectUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: projectCreateOrConnectWithoutCompanyInput | projectCreateOrConnectWithoutCompanyInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutCompanyInput | projectUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: projectCreateManyCompanyInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutCompanyInput | projectUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: projectUpdateManyWithWhereWithoutCompanyInput | projectUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type bidCreateNestedManyWithoutFreelancerInput = {
    create?:
      | XOR<bidCreateWithoutFreelancerInput, bidUncheckedCreateWithoutFreelancerInput>
      | bidCreateWithoutFreelancerInput[]
      | bidUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: bidCreateOrConnectWithoutFreelancerInput | bidCreateOrConnectWithoutFreelancerInput[];
    createMany?: bidCreateManyFreelancerInputEnvelope;
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutFreelancerInput = {
    create?: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
    connectOrCreate?: userCreateOrConnectWithoutFreelancerInput;
    connect?: userWhereUniqueInput;
  };

  export type projectCreateNestedManyWithoutFreelancerInput = {
    create?:
      | XOR<projectCreateWithoutFreelancerInput, projectUncheckedCreateWithoutFreelancerInput>
      | projectCreateWithoutFreelancerInput[]
      | projectUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: projectCreateOrConnectWithoutFreelancerInput | projectCreateOrConnectWithoutFreelancerInput[];
    createMany?: projectCreateManyFreelancerInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type bidUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?:
      | XOR<bidCreateWithoutFreelancerInput, bidUncheckedCreateWithoutFreelancerInput>
      | bidCreateWithoutFreelancerInput[]
      | bidUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: bidCreateOrConnectWithoutFreelancerInput | bidCreateOrConnectWithoutFreelancerInput[];
    createMany?: bidCreateManyFreelancerInputEnvelope;
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutFreelancerInput = {
    create?:
      | XOR<projectCreateWithoutFreelancerInput, projectUncheckedCreateWithoutFreelancerInput>
      | projectCreateWithoutFreelancerInput[]
      | projectUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: projectCreateOrConnectWithoutFreelancerInput | projectCreateOrConnectWithoutFreelancerInput[];
    createMany?: projectCreateManyFreelancerInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type bidUpdateManyWithoutFreelancerNestedInput = {
    create?:
      | XOR<bidCreateWithoutFreelancerInput, bidUncheckedCreateWithoutFreelancerInput>
      | bidCreateWithoutFreelancerInput[]
      | bidUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: bidCreateOrConnectWithoutFreelancerInput | bidCreateOrConnectWithoutFreelancerInput[];
    upsert?: bidUpsertWithWhereUniqueWithoutFreelancerInput | bidUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: bidCreateManyFreelancerInputEnvelope;
    set?: bidWhereUniqueInput | bidWhereUniqueInput[];
    disconnect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    delete?: bidWhereUniqueInput | bidWhereUniqueInput[];
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    update?: bidUpdateWithWhereUniqueWithoutFreelancerInput | bidUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: bidUpdateManyWithWhereWithoutFreelancerInput | bidUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: bidScalarWhereInput | bidScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutFreelancerNestedInput = {
    create?: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
    connectOrCreate?: userCreateOrConnectWithoutFreelancerInput;
    upsert?: userUpsertWithoutFreelancerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFreelancerInput, userUpdateWithoutFreelancerInput>,
      userUncheckedUpdateWithoutFreelancerInput
    >;
  };

  export type projectUpdateManyWithoutFreelancerNestedInput = {
    create?:
      | XOR<projectCreateWithoutFreelancerInput, projectUncheckedCreateWithoutFreelancerInput>
      | projectCreateWithoutFreelancerInput[]
      | projectUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: projectCreateOrConnectWithoutFreelancerInput | projectCreateOrConnectWithoutFreelancerInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutFreelancerInput | projectUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: projectCreateManyFreelancerInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutFreelancerInput | projectUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: projectUpdateManyWithWhereWithoutFreelancerInput | projectUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type bidUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?:
      | XOR<bidCreateWithoutFreelancerInput, bidUncheckedCreateWithoutFreelancerInput>
      | bidCreateWithoutFreelancerInput[]
      | bidUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: bidCreateOrConnectWithoutFreelancerInput | bidCreateOrConnectWithoutFreelancerInput[];
    upsert?: bidUpsertWithWhereUniqueWithoutFreelancerInput | bidUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: bidCreateManyFreelancerInputEnvelope;
    set?: bidWhereUniqueInput | bidWhereUniqueInput[];
    disconnect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    delete?: bidWhereUniqueInput | bidWhereUniqueInput[];
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    update?: bidUpdateWithWhereUniqueWithoutFreelancerInput | bidUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: bidUpdateManyWithWhereWithoutFreelancerInput | bidUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: bidScalarWhereInput | bidScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutFreelancerNestedInput = {
    create?:
      | XOR<projectCreateWithoutFreelancerInput, projectUncheckedCreateWithoutFreelancerInput>
      | projectCreateWithoutFreelancerInput[]
      | projectUncheckedCreateWithoutFreelancerInput[];
    connectOrCreate?: projectCreateOrConnectWithoutFreelancerInput | projectCreateOrConnectWithoutFreelancerInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutFreelancerInput | projectUpsertWithWhereUniqueWithoutFreelancerInput[];
    createMany?: projectCreateManyFreelancerInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutFreelancerInput | projectUpdateWithWhereUniqueWithoutFreelancerInput[];
    updateMany?: projectUpdateManyWithWhereWithoutFreelancerInput | projectUpdateManyWithWhereWithoutFreelancerInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type bidCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<bidCreateWithoutProjectInput, bidUncheckedCreateWithoutProjectInput>
      | bidCreateWithoutProjectInput[]
      | bidUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: bidCreateOrConnectWithoutProjectInput | bidCreateOrConnectWithoutProjectInput[];
    createMany?: bidCreateManyProjectInputEnvelope;
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutProjectInput = {
    create?: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: companyCreateOrConnectWithoutProjectInput;
    connect?: companyWhereUniqueInput;
  };

  export type freelancerCreateNestedOneWithoutProjectInput = {
    create?: XOR<freelancerCreateWithoutProjectInput, freelancerUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: freelancerCreateOrConnectWithoutProjectInput;
    connect?: freelancerWhereUniqueInput;
  };

  export type reviewCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<reviewCreateWithoutProjectInput, reviewUncheckedCreateWithoutProjectInput>
      | reviewCreateWithoutProjectInput[]
      | reviewUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutProjectInput | reviewCreateOrConnectWithoutProjectInput[];
    createMany?: reviewCreateManyProjectInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type bidUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<bidCreateWithoutProjectInput, bidUncheckedCreateWithoutProjectInput>
      | bidCreateWithoutProjectInput[]
      | bidUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: bidCreateOrConnectWithoutProjectInput | bidCreateOrConnectWithoutProjectInput[];
    createMany?: bidCreateManyProjectInputEnvelope;
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<reviewCreateWithoutProjectInput, reviewUncheckedCreateWithoutProjectInput>
      | reviewCreateWithoutProjectInput[]
      | reviewUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutProjectInput | reviewCreateOrConnectWithoutProjectInput[];
    createMany?: reviewCreateManyProjectInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type bidUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<bidCreateWithoutProjectInput, bidUncheckedCreateWithoutProjectInput>
      | bidCreateWithoutProjectInput[]
      | bidUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: bidCreateOrConnectWithoutProjectInput | bidCreateOrConnectWithoutProjectInput[];
    upsert?: bidUpsertWithWhereUniqueWithoutProjectInput | bidUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: bidCreateManyProjectInputEnvelope;
    set?: bidWhereUniqueInput | bidWhereUniqueInput[];
    disconnect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    delete?: bidWhereUniqueInput | bidWhereUniqueInput[];
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    update?: bidUpdateWithWhereUniqueWithoutProjectInput | bidUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: bidUpdateManyWithWhereWithoutProjectInput | bidUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: bidScalarWhereInput | bidScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: companyCreateOrConnectWithoutProjectInput;
    upsert?: companyUpsertWithoutProjectInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutProjectInput, companyUpdateWithoutProjectInput>,
      companyUncheckedUpdateWithoutProjectInput
    >;
  };

  export type freelancerUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<freelancerCreateWithoutProjectInput, freelancerUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: freelancerCreateOrConnectWithoutProjectInput;
    upsert?: freelancerUpsertWithoutProjectInput;
    connect?: freelancerWhereUniqueInput;
    update?: XOR<
      XOR<freelancerUpdateToOneWithWhereWithoutProjectInput, freelancerUpdateWithoutProjectInput>,
      freelancerUncheckedUpdateWithoutProjectInput
    >;
  };

  export type reviewUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<reviewCreateWithoutProjectInput, reviewUncheckedCreateWithoutProjectInput>
      | reviewCreateWithoutProjectInput[]
      | reviewUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutProjectInput | reviewCreateOrConnectWithoutProjectInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutProjectInput | reviewUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: reviewCreateManyProjectInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutProjectInput | reviewUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutProjectInput | reviewUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type bidUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<bidCreateWithoutProjectInput, bidUncheckedCreateWithoutProjectInput>
      | bidCreateWithoutProjectInput[]
      | bidUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: bidCreateOrConnectWithoutProjectInput | bidCreateOrConnectWithoutProjectInput[];
    upsert?: bidUpsertWithWhereUniqueWithoutProjectInput | bidUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: bidCreateManyProjectInputEnvelope;
    set?: bidWhereUniqueInput | bidWhereUniqueInput[];
    disconnect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    delete?: bidWhereUniqueInput | bidWhereUniqueInput[];
    connect?: bidWhereUniqueInput | bidWhereUniqueInput[];
    update?: bidUpdateWithWhereUniqueWithoutProjectInput | bidUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: bidUpdateManyWithWhereWithoutProjectInput | bidUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: bidScalarWhereInput | bidScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<reviewCreateWithoutProjectInput, reviewUncheckedCreateWithoutProjectInput>
      | reviewCreateWithoutProjectInput[]
      | reviewUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutProjectInput | reviewCreateOrConnectWithoutProjectInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutProjectInput | reviewUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: reviewCreateManyProjectInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutProjectInput | reviewUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutProjectInput | reviewUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type projectCreateNestedOneWithoutReviewInput = {
    create?: XOR<projectCreateWithoutReviewInput, projectUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: projectCreateOrConnectWithoutReviewInput;
    connect?: projectWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReview_review_reviewee_idTouserInput = {
    create?: XOR<
      userCreateWithoutReview_review_reviewee_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewee_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewee_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReview_review_reviewer_idTouserInput = {
    create?: XOR<
      userCreateWithoutReview_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewer_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type projectUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<projectCreateWithoutReviewInput, projectUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: projectCreateOrConnectWithoutReviewInput;
    upsert?: projectUpsertWithoutReviewInput;
    connect?: projectWhereUniqueInput;
    update?: XOR<
      XOR<projectUpdateToOneWithWhereWithoutReviewInput, projectUpdateWithoutReviewInput>,
      projectUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutReview_review_reviewee_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewee_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewee_idTouserInput;
    upsert?: userUpsertWithoutReview_review_reviewee_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutReview_review_reviewee_idTouserInput,
        userUpdateWithoutReview_review_reviewee_idTouserInput
      >,
      userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutReview_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewer_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewer_idTouserInput;
    upsert?: userUpsertWithoutReview_review_reviewer_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutReview_review_reviewer_idTouserInput,
        userUpdateWithoutReview_review_reviewer_idTouserInput
      >,
      userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type freelancerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewee_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewee_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewer_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewer_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type freelancerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewee_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewee_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewer_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewer_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type freelancerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    upsert?: freelancerUpsertWithWhereUniqueWithoutUserInput | freelancerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    set?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    disconnect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    delete?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    update?: freelancerUpdateWithWhereUniqueWithoutUserInput | freelancerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: freelancerUpdateManyWithWhereWithoutUserInput | freelancerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewee_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewee_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[];
    upsert?:
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?:
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[];
    updateMany?:
      | reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput
      | reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewer_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewer_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[];
    upsert?:
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?:
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[];
    updateMany?:
      | reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput
      | reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type freelancerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>
      | freelancerCreateWithoutUserInput[]
      | freelancerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: freelancerCreateOrConnectWithoutUserInput | freelancerCreateOrConnectWithoutUserInput[];
    upsert?: freelancerUpsertWithWhereUniqueWithoutUserInput | freelancerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: freelancerCreateManyUserInputEnvelope;
    set?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    disconnect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    delete?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    connect?: freelancerWhereUniqueInput | freelancerWhereUniqueInput[];
    update?: freelancerUpdateWithWhereUniqueWithoutUserInput | freelancerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: freelancerUpdateManyWithWhereWithoutUserInput | freelancerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewee_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewee_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[];
    upsert?:
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?:
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[];
    updateMany?:
      | reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput
      | reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput = {
    create?:
      | XOR<
          reviewCreateWithoutUser_review_reviewer_idTouserInput,
          reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput
        >
      | reviewCreateWithoutUser_review_reviewer_idTouserInput[]
      | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[];
    connectOrCreate?:
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput
      | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[];
    upsert?:
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput
      | reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[];
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?:
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput
      | reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[];
    updateMany?:
      | reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput
      | reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type freelancerCreateWithoutBidInput = {
    id?: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFreelancerInput;
    project?: projectCreateNestedManyWithoutFreelancerInput;
  };

  export type freelancerUncheckedCreateWithoutBidInput = {
    id?: string;
    user_id: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project?: projectUncheckedCreateNestedManyWithoutFreelancerInput;
  };

  export type freelancerCreateOrConnectWithoutBidInput = {
    where: freelancerWhereUniqueInput;
    create: XOR<freelancerCreateWithoutBidInput, freelancerUncheckedCreateWithoutBidInput>;
  };

  export type projectCreateWithoutBidInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutProjectInput;
    freelancer: freelancerCreateNestedOneWithoutProjectInput;
    review?: reviewCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutBidInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    company_id: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutBidInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutBidInput, projectUncheckedCreateWithoutBidInput>;
  };

  export type freelancerUpsertWithoutBidInput = {
    update: XOR<freelancerUpdateWithoutBidInput, freelancerUncheckedUpdateWithoutBidInput>;
    create: XOR<freelancerCreateWithoutBidInput, freelancerUncheckedCreateWithoutBidInput>;
    where?: freelancerWhereInput;
  };

  export type freelancerUpdateToOneWithWhereWithoutBidInput = {
    where?: freelancerWhereInput;
    data: XOR<freelancerUpdateWithoutBidInput, freelancerUncheckedUpdateWithoutBidInput>;
  };

  export type freelancerUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFreelancerNestedInput;
    project?: projectUpdateManyWithoutFreelancerNestedInput;
  };

  export type freelancerUncheckedUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUncheckedUpdateManyWithoutFreelancerNestedInput;
  };

  export type projectUpsertWithoutBidInput = {
    update: XOR<projectUpdateWithoutBidInput, projectUncheckedUpdateWithoutBidInput>;
    create: XOR<projectCreateWithoutBidInput, projectUncheckedCreateWithoutBidInput>;
    where?: projectWhereInput;
  };

  export type projectUpdateToOneWithWhereWithoutBidInput = {
    where?: projectWhereInput;
    data: XOR<projectUpdateWithoutBidInput, projectUncheckedUpdateWithoutBidInput>;
  };

  export type projectUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutProjectNestedInput;
    freelancer?: freelancerUpdateOneRequiredWithoutProjectNestedInput;
    review?: reviewUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type projectCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidCreateNestedManyWithoutProjectInput;
    freelancer: freelancerCreateNestedOneWithoutProjectInput;
    review?: reviewCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidUncheckedCreateNestedManyWithoutProjectInput;
    review?: reviewUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutCompanyInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>;
  };

  export type projectCreateManyCompanyInputEnvelope = {
    data: projectCreateManyCompanyInput | projectCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type projectUpsertWithWhereUniqueWithoutCompanyInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutCompanyInput, projectUncheckedUpdateWithoutCompanyInput>;
    create: XOR<projectCreateWithoutCompanyInput, projectUncheckedCreateWithoutCompanyInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutCompanyInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutCompanyInput, projectUncheckedUpdateWithoutCompanyInput>;
  };

  export type projectUpdateManyWithWhereWithoutCompanyInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[];
    OR?: projectScalarWhereInput[];
    NOT?: projectScalarWhereInput | projectScalarWhereInput[];
    id?: UuidFilter<'project'> | string;
    name?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    budget?: IntNullableFilter<'project'> | number | null;
    deadline?: DateTimeNullableFilter<'project'> | Date | string | null;
    company_id?: UuidFilter<'project'> | string;
    freelancer_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
  };

  export type bidCreateWithoutFreelancerInput = {
    id?: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project: projectCreateNestedOneWithoutBidInput;
  };

  export type bidUncheckedCreateWithoutFreelancerInput = {
    id?: string;
    project_id: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bidCreateOrConnectWithoutFreelancerInput = {
    where: bidWhereUniqueInput;
    create: XOR<bidCreateWithoutFreelancerInput, bidUncheckedCreateWithoutFreelancerInput>;
  };

  export type bidCreateManyFreelancerInputEnvelope = {
    data: bidCreateManyFreelancerInput | bidCreateManyFreelancerInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutFreelancerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userUncheckedCreateWithoutFreelancerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userCreateOrConnectWithoutFreelancerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
  };

  export type projectCreateWithoutFreelancerInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidCreateNestedManyWithoutProjectInput;
    company: companyCreateNestedOneWithoutProjectInput;
    review?: reviewCreateNestedManyWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutFreelancerInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidUncheckedCreateNestedManyWithoutProjectInput;
    review?: reviewUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutFreelancerInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutFreelancerInput, projectUncheckedCreateWithoutFreelancerInput>;
  };

  export type projectCreateManyFreelancerInputEnvelope = {
    data: projectCreateManyFreelancerInput | projectCreateManyFreelancerInput[];
    skipDuplicates?: boolean;
  };

  export type bidUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: bidWhereUniqueInput;
    update: XOR<bidUpdateWithoutFreelancerInput, bidUncheckedUpdateWithoutFreelancerInput>;
    create: XOR<bidCreateWithoutFreelancerInput, bidUncheckedCreateWithoutFreelancerInput>;
  };

  export type bidUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: bidWhereUniqueInput;
    data: XOR<bidUpdateWithoutFreelancerInput, bidUncheckedUpdateWithoutFreelancerInput>;
  };

  export type bidUpdateManyWithWhereWithoutFreelancerInput = {
    where: bidScalarWhereInput;
    data: XOR<bidUpdateManyMutationInput, bidUncheckedUpdateManyWithoutFreelancerInput>;
  };

  export type bidScalarWhereInput = {
    AND?: bidScalarWhereInput | bidScalarWhereInput[];
    OR?: bidScalarWhereInput[];
    NOT?: bidScalarWhereInput | bidScalarWhereInput[];
    id?: UuidFilter<'bid'> | string;
    freelancer_id?: UuidFilter<'bid'> | string;
    project_id?: UuidFilter<'bid'> | string;
    amount?: IntNullableFilter<'bid'> | number | null;
    proposed_completion_date?: DateTimeNullableFilter<'bid'> | Date | string | null;
    message?: StringNullableFilter<'bid'> | string | null;
    created_at?: DateTimeFilter<'bid'> | Date | string;
    updated_at?: DateTimeFilter<'bid'> | Date | string;
  };

  export type userUpsertWithoutFreelancerInput = {
    update: XOR<userUpdateWithoutFreelancerInput, userUncheckedUpdateWithoutFreelancerInput>;
    create: XOR<userCreateWithoutFreelancerInput, userUncheckedCreateWithoutFreelancerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFreelancerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFreelancerInput, userUncheckedUpdateWithoutFreelancerInput>;
  };

  export type userUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type projectUpsertWithWhereUniqueWithoutFreelancerInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutFreelancerInput, projectUncheckedUpdateWithoutFreelancerInput>;
    create: XOR<projectCreateWithoutFreelancerInput, projectUncheckedCreateWithoutFreelancerInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutFreelancerInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutFreelancerInput, projectUncheckedUpdateWithoutFreelancerInput>;
  };

  export type projectUpdateManyWithWhereWithoutFreelancerInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutFreelancerInput>;
  };

  export type bidCreateWithoutProjectInput = {
    id?: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    freelancer: freelancerCreateNestedOneWithoutBidInput;
  };

  export type bidUncheckedCreateWithoutProjectInput = {
    id?: string;
    freelancer_id: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bidCreateOrConnectWithoutProjectInput = {
    where: bidWhereUniqueInput;
    create: XOR<bidCreateWithoutProjectInput, bidUncheckedCreateWithoutProjectInput>;
  };

  export type bidCreateManyProjectInputEnvelope = {
    data: bidCreateManyProjectInput | bidCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutProjectInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
  };

  export type freelancerCreateWithoutProjectInput = {
    id?: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidCreateNestedManyWithoutFreelancerInput;
    user: userCreateNestedOneWithoutFreelancerInput;
  };

  export type freelancerUncheckedCreateWithoutProjectInput = {
    id?: string;
    user_id: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidUncheckedCreateNestedManyWithoutFreelancerInput;
  };

  export type freelancerCreateOrConnectWithoutProjectInput = {
    where: freelancerWhereUniqueInput;
    create: XOR<freelancerCreateWithoutProjectInput, freelancerUncheckedCreateWithoutProjectInput>;
  };

  export type reviewCreateWithoutProjectInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_review_reviewee_idTouser: userCreateNestedOneWithoutReview_review_reviewee_idTouserInput;
    user_review_reviewer_idTouser: userCreateNestedOneWithoutReview_review_reviewer_idTouserInput;
  };

  export type reviewUncheckedCreateWithoutProjectInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    reviewer_id: string;
    reviewee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutProjectInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutProjectInput, reviewUncheckedCreateWithoutProjectInput>;
  };

  export type reviewCreateManyProjectInputEnvelope = {
    data: reviewCreateManyProjectInput | reviewCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type bidUpsertWithWhereUniqueWithoutProjectInput = {
    where: bidWhereUniqueInput;
    update: XOR<bidUpdateWithoutProjectInput, bidUncheckedUpdateWithoutProjectInput>;
    create: XOR<bidCreateWithoutProjectInput, bidUncheckedCreateWithoutProjectInput>;
  };

  export type bidUpdateWithWhereUniqueWithoutProjectInput = {
    where: bidWhereUniqueInput;
    data: XOR<bidUpdateWithoutProjectInput, bidUncheckedUpdateWithoutProjectInput>;
  };

  export type bidUpdateManyWithWhereWithoutProjectInput = {
    where: bidScalarWhereInput;
    data: XOR<bidUpdateManyMutationInput, bidUncheckedUpdateManyWithoutProjectInput>;
  };

  export type companyUpsertWithoutProjectInput = {
    update: XOR<companyUpdateWithoutProjectInput, companyUncheckedUpdateWithoutProjectInput>;
    create: XOR<companyCreateWithoutProjectInput, companyUncheckedCreateWithoutProjectInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutProjectInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutProjectInput, companyUncheckedUpdateWithoutProjectInput>;
  };

  export type companyUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type freelancerUpsertWithoutProjectInput = {
    update: XOR<freelancerUpdateWithoutProjectInput, freelancerUncheckedUpdateWithoutProjectInput>;
    create: XOR<freelancerCreateWithoutProjectInput, freelancerUncheckedCreateWithoutProjectInput>;
    where?: freelancerWhereInput;
  };

  export type freelancerUpdateToOneWithWhereWithoutProjectInput = {
    where?: freelancerWhereInput;
    data: XOR<freelancerUpdateWithoutProjectInput, freelancerUncheckedUpdateWithoutProjectInput>;
  };

  export type freelancerUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUpdateManyWithoutFreelancerNestedInput;
    user?: userUpdateOneRequiredWithoutFreelancerNestedInput;
  };

  export type freelancerUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUncheckedUpdateManyWithoutFreelancerNestedInput;
  };

  export type reviewUpsertWithWhereUniqueWithoutProjectInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutProjectInput, reviewUncheckedUpdateWithoutProjectInput>;
    create: XOR<reviewCreateWithoutProjectInput, reviewUncheckedCreateWithoutProjectInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutProjectInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutProjectInput, reviewUncheckedUpdateWithoutProjectInput>;
  };

  export type reviewUpdateManyWithWhereWithoutProjectInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutProjectInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntNullableFilter<'review'> | number | null;
    feedback?: StringNullableFilter<'review'> | string | null;
    project_id?: UuidFilter<'review'> | string;
    reviewer_id?: UuidFilter<'review'> | string;
    reviewee_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type projectCreateWithoutReviewInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidCreateNestedManyWithoutProjectInput;
    company: companyCreateNestedOneWithoutProjectInput;
    freelancer: freelancerCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutReviewInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    company_id: string;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutReviewInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutReviewInput, projectUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReview_review_reviewee_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userUncheckedCreateWithoutReview_review_reviewee_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput;
  };

  export type userCreateOrConnectWithoutReview_review_reviewee_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutReview_review_reviewee_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewee_idTouserInput
    >;
  };

  export type userCreateWithoutReview_review_reviewer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    freelancer?: freelancerCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
  };

  export type userUncheckedCreateWithoutReview_review_reviewer_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    freelancer?: freelancerUncheckedCreateNestedManyWithoutUserInput;
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput;
  };

  export type userCreateOrConnectWithoutReview_review_reviewer_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutReview_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewer_idTouserInput
    >;
  };

  export type projectUpsertWithoutReviewInput = {
    update: XOR<projectUpdateWithoutReviewInput, projectUncheckedUpdateWithoutReviewInput>;
    create: XOR<projectCreateWithoutReviewInput, projectUncheckedCreateWithoutReviewInput>;
    where?: projectWhereInput;
  };

  export type projectUpdateToOneWithWhereWithoutReviewInput = {
    where?: projectWhereInput;
    data: XOR<projectUpdateWithoutReviewInput, projectUncheckedUpdateWithoutReviewInput>;
  };

  export type projectUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUpdateManyWithoutProjectNestedInput;
    company?: companyUpdateOneRequiredWithoutProjectNestedInput;
    freelancer?: freelancerUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type userUpsertWithoutReview_review_reviewee_idTouserInput = {
    update: XOR<
      userUpdateWithoutReview_review_reviewee_idTouserInput,
      userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput
    >;
    create: XOR<
      userCreateWithoutReview_review_reviewee_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewee_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReview_review_reviewee_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutReview_review_reviewee_idTouserInput,
      userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput
    >;
  };

  export type userUpdateWithoutReview_review_reviewee_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput;
  };

  export type userUpsertWithoutReview_review_reviewer_idTouserInput = {
    update: XOR<
      userUpdateWithoutReview_review_reviewer_idTouserInput,
      userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput
    >;
    create: XOR<
      userCreateWithoutReview_review_reviewer_idTouserInput,
      userUncheckedCreateWithoutReview_review_reviewer_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReview_review_reviewer_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutReview_review_reviewer_idTouserInput,
      userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput
    >;
  };

  export type userUpdateWithoutReview_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    freelancer?: freelancerUncheckedUpdateManyWithoutUserNestedInput;
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    project?: projectCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    project?: projectUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type freelancerCreateWithoutUserInput = {
    id?: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidCreateNestedManyWithoutFreelancerInput;
    project?: projectCreateNestedManyWithoutFreelancerInput;
  };

  export type freelancerUncheckedCreateWithoutUserInput = {
    id?: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bid?: bidUncheckedCreateNestedManyWithoutFreelancerInput;
    project?: projectUncheckedCreateNestedManyWithoutFreelancerInput;
  };

  export type freelancerCreateOrConnectWithoutUserInput = {
    where: freelancerWhereUniqueInput;
    create: XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>;
  };

  export type freelancerCreateManyUserInputEnvelope = {
    data: freelancerCreateManyUserInput | freelancerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUser_review_reviewee_idTouserInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project: projectCreateNestedOneWithoutReviewInput;
    user_review_reviewer_idTouser: userCreateNestedOneWithoutReview_review_reviewer_idTouserInput;
  };

  export type reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    project_id: string;
    reviewer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<
      reviewCreateWithoutUser_review_reviewee_idTouserInput,
      reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput
    >;
  };

  export type reviewCreateManyUser_review_reviewee_idTouserInputEnvelope = {
    data: reviewCreateManyUser_review_reviewee_idTouserInput | reviewCreateManyUser_review_reviewee_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUser_review_reviewer_idTouserInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project: projectCreateNestedOneWithoutReviewInput;
    user_review_reviewee_idTouser: userCreateNestedOneWithoutReview_review_reviewee_idTouserInput;
  };

  export type reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    project_id: string;
    reviewee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<
      reviewCreateWithoutUser_review_reviewer_idTouserInput,
      reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput
    >;
  };

  export type reviewCreateManyUser_review_reviewer_idTouserInputEnvelope = {
    data: reviewCreateManyUser_review_reviewer_idTouserInput | reviewCreateManyUser_review_reviewer_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    website?: StringNullableFilter<'company'> | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type freelancerUpsertWithWhereUniqueWithoutUserInput = {
    where: freelancerWhereUniqueInput;
    update: XOR<freelancerUpdateWithoutUserInput, freelancerUncheckedUpdateWithoutUserInput>;
    create: XOR<freelancerCreateWithoutUserInput, freelancerUncheckedCreateWithoutUserInput>;
  };

  export type freelancerUpdateWithWhereUniqueWithoutUserInput = {
    where: freelancerWhereUniqueInput;
    data: XOR<freelancerUpdateWithoutUserInput, freelancerUncheckedUpdateWithoutUserInput>;
  };

  export type freelancerUpdateManyWithWhereWithoutUserInput = {
    where: freelancerScalarWhereInput;
    data: XOR<freelancerUpdateManyMutationInput, freelancerUncheckedUpdateManyWithoutUserInput>;
  };

  export type freelancerScalarWhereInput = {
    AND?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
    OR?: freelancerScalarWhereInput[];
    NOT?: freelancerScalarWhereInput | freelancerScalarWhereInput[];
    id?: UuidFilter<'freelancer'> | string;
    user_id?: UuidFilter<'freelancer'> | string;
    skills?: StringNullableFilter<'freelancer'> | string | null;
    experience?: IntNullableFilter<'freelancer'> | number | null;
    portfolio_url?: StringNullableFilter<'freelancer'> | string | null;
    hourly_rate?: IntNullableFilter<'freelancer'> | number | null;
    availability?: StringNullableFilter<'freelancer'> | string | null;
    created_at?: DateTimeFilter<'freelancer'> | Date | string;
    updated_at?: DateTimeFilter<'freelancer'> | Date | string;
  };

  export type reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<
      reviewUpdateWithoutUser_review_reviewee_idTouserInput,
      reviewUncheckedUpdateWithoutUser_review_reviewee_idTouserInput
    >;
    create: XOR<
      reviewCreateWithoutUser_review_reviewee_idTouserInput,
      reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput
    >;
  };

  export type reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<
      reviewUpdateWithoutUser_review_reviewee_idTouserInput,
      reviewUncheckedUpdateWithoutUser_review_reviewee_idTouserInput
    >;
  };

  export type reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserInput>;
  };

  export type reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<
      reviewUpdateWithoutUser_review_reviewer_idTouserInput,
      reviewUncheckedUpdateWithoutUser_review_reviewer_idTouserInput
    >;
    create: XOR<
      reviewCreateWithoutUser_review_reviewer_idTouserInput,
      reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput
    >;
  };

  export type reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<
      reviewUpdateWithoutUser_review_reviewer_idTouserInput,
      reviewUncheckedUpdateWithoutUser_review_reviewer_idTouserInput
    >;
  };

  export type reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserInput>;
  };

  export type projectCreateManyCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    freelancer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUpdateManyWithoutProjectNestedInput;
    freelancer?: freelancerUpdateOneRequiredWithoutProjectNestedInput;
    review?: reviewUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUncheckedUpdateManyWithoutProjectNestedInput;
    review?: reviewUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bidCreateManyFreelancerInput = {
    id?: string;
    project_id: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectCreateManyFreelancerInput = {
    id?: string;
    name: string;
    description?: string | null;
    budget?: number | null;
    deadline?: Date | string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bidUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateOneRequiredWithoutBidNestedInput;
  };

  export type bidUncheckedUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bidUncheckedUpdateManyWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUpdateManyWithoutProjectNestedInput;
    company?: companyUpdateOneRequiredWithoutProjectNestedInput;
    review?: reviewUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUncheckedUpdateManyWithoutProjectNestedInput;
    review?: reviewUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateManyWithoutFreelancerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    budget?: NullableIntFieldUpdateOperationsInput | number | null;
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bidCreateManyProjectInput = {
    id?: string;
    freelancer_id: string;
    amount?: number | null;
    proposed_completion_date?: Date | string | null;
    message?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyProjectInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    reviewer_id: string;
    reviewee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bidUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    freelancer?: freelancerUpdateOneRequiredWithoutBidNestedInput;
  };

  export type bidUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bidUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    freelancer_id?: StringFieldUpdateOperationsInput | string;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    proposed_completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_review_reviewee_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput;
    user_review_reviewer_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput;
  };

  export type reviewUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    reviewee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    reviewee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    website?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type freelancerCreateManyUserInput = {
    id?: string;
    skills?: string | null;
    experience?: number | null;
    portfolio_url?: string | null;
    hourly_rate?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyUser_review_reviewee_idTouserInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    project_id: string;
    reviewer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyUser_review_reviewer_idTouserInput = {
    id?: string;
    rating?: number | null;
    feedback?: string | null;
    project_id: string;
    reviewee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type freelancerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUpdateManyWithoutFreelancerNestedInput;
    project?: projectUpdateManyWithoutFreelancerNestedInput;
  };

  export type freelancerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bid?: bidUncheckedUpdateManyWithoutFreelancerNestedInput;
    project?: projectUncheckedUpdateManyWithoutFreelancerNestedInput;
  };

  export type freelancerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    skills?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null;
    hourly_rate?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutUser_review_reviewee_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateOneRequiredWithoutReviewNestedInput;
    user_review_reviewer_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUser_review_reviewee_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    reviewer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutUser_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateOneRequiredWithoutReviewNestedInput;
    user_review_reviewee_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUser_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    reviewee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    feedback?: NullableStringFieldUpdateOperationsInput | string | null;
    project_id?: StringFieldUpdateOperationsInput | string;
    reviewee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FreelancerCountOutputTypeDefaultArgs instead
   */
  export type FreelancerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    FreelancerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
   */
  export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bidDefaultArgs instead
   */
  export type bidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bidDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use freelancerDefaultArgs instead
   */
  export type freelancerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    freelancerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use projectDefaultArgs instead
   */
  export type projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    projectDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
