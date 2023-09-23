import os
import sys


def main():
    localPath = os.path.dirname(sys.argv[0])
    names = []
    with open(localPath + "/images.ts", "w") as f:
        for root, dirs, files in os.walk(localPath):
            nowPath = root.split("/app/image/")
            if len(nowPath) == 1:
                nowPath = ""
            else:
                nowPath = nowPath[1]

            for file in files:
                if file.endswith((".jpg", ".png", ".jpeg", ".webp", ".gif")):
                    name = file.split(".")[0]
                    names.append(name)
                    f.write(f'import {name} from "./{nowPath}/{file}";\n')

        f.write("\n")
        f.write("export {\n")
        for name in names:
            f.write(f"    {name},\n")
        f.write("};\n")
        f.close()


if __name__ == "__main__":
    main()
