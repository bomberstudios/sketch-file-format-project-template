import { fromFile, SketchFile, toFile } from '@sketch-hq/sketch-file'
import { resolve } from 'path'

const sketchDocumentPath = '../sample-file.sketch'

// Load the Sketch document and parse it into a SketchFile object
fromFile(resolve(__dirname, sketchDocumentPath)).then(
  (parsedFile: SketchFile) => {
    const document = parsedFile.contents.document

    // ...process file here...
    console.log(`Loaded document "${document.do_objectID}"`)
    for (const style of document.layerStyles.objects) {
      console.log(`Loaded layer style "${style.name}"`)
    }

    // ...and finally, save the file back to disk
    toFile(parsedFile).then(() => {
      console.log('✅ File saved successfully.')
    })
  }
)
