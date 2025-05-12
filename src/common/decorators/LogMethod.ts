export function LogMethod(): MethodDecorator {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      console.log(`\n[${target.constructor.name}] ${String(propertyKey)}`);
      console.log(`Arguments:`, args);

      const startTime = Date.now();
      const result = await originalMethod.apply(this, args);

      console.log(`\n[${target.constructor.name}] ${String(propertyKey)} - Returned:`, result);
      console.log(`Execution time: ${Date.now() - startTime}ms`);

      return result;
    };

    return descriptor;
  };
}
