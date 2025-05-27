// Arrays

const array1 = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
]

const array2 = ['first', 'second', 'third', 'fourth']

const array3 = [
  'first',
  'second',
  'third',
  'fourth',
]

const array4 = ['first', 'second', 'third', 'fourth']

// Objects

const object1 = {
  name: 'John',
  age: 20,
  role: 'admin',
  email: 'john.doe@example.com',
  address: '1234 Main St, Springfield, USA',
  phone: '+1-555-1234',
}

const object2 = { name: 'John', age: 20, role: 'admin' }

const object3 = { name: 'John', age: 20, role: 'admin' }

const object4 = {
  name: 'John',
  age: 20,
  role: 'admin',
}

const object5 = [{
  name: 'John',
  age: 20,
  role: 'admin',
}]

// Types

const DRAFT_VERSION_STATUS = 'draft'
const RELEASE_VERSION_STATUS = 'release'
const ARCHIVED_VERSION_STATUS = 'archived'

type VersionStatus =
  | typeof DRAFT_VERSION_STATUS
  | typeof RELEASE_VERSION_STATUS
  | typeof ARCHIVED_VERSION_STATUS

const versionStatus: VersionStatus = 'draft'

type IsEqualFunction<A> =
  & ((one: A, another: A) => boolean)
  & ((one: A[], another: A[]) => boolean)
  & ((one: Set<A>, another: Set<A>) => boolean)

type IsEqualFunction2<A> =
  & ((
    one: A,
    another: A,
  ) => boolean)
  & ((
    one: A[],
    another: A[],
  ) => boolean)
  & ((
    one: Set<A>,
    another: Set<A>,
  ) => boolean)

type NodeTitleDataOptions<T> = {
  node: T | null
  nodeValue?: unknown
  nodeMeta?: unknown
  titleMappings?: Record<string, string>
}

type NodeTypeDataOptions<S, N, V> = Partial<S> & {
  node: N | null
  nodeValue?: V | null
}

type NodeTypeDataOptions2<
  S,
  N,
  V,
> = Partial<S> & {
  node: N | null
  nodeValue?: V | null
}

console.log(array1, array2, object1, object2, object3, object4, versionStatus)
