module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    schema: [],
  },
  create(context) {
    const HEADER = `/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */`

    return {
      Program(node) {
        const sourceCode = context.getSourceCode()
        const comments = sourceCode.getAllComments()
        const firstComment = comments[0]

        const hasHeader =
          firstComment &&
          firstComment.type === 'Block' &&
          ('/*' + firstComment.value + '*/').trim() === HEADER.trim()

        if (!hasHeader) {
          context.report({
            node,
            message: 'El archivo debe iniciar con el header del proyecto.',
            fix(fixer) {
              return fixer.insertTextBefore(node, HEADER + '\n\n')
            },
          })
        }
      },
    }
  },
}
