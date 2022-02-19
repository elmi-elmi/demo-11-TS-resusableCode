import {OutputTarget} from "../Summary";
import * as fs from "fs";

export class HtmlReport implements OutputTarget{
    print(report: string) {
        const html = `
        <div>
        <h1>Output Analysis:</h1>
        <h3>${report}</h3>
</div>
        `
        fs.writeFileSync('report.html', html)

    }
}